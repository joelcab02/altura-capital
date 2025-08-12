import { VercelRequest, VercelResponse } from '@vercel/node';

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface CloseLeadPayload {
  name: string;
  contacts: Array<{
    name: string;
    emails: Array<{ email: string; type: string }>;
    phones: Array<{ phone: string; type: string }>;
  }>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Check environment variables first
    if (!process.env.CLOSE_API_KEY) {
      console.error('Missing CLOSE_API_KEY environment variable');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Missing API key configuration'
      });
    }

    const { firstName, lastName, email, phone }: LeadData = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['firstName', 'lastName', 'email', 'phone']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Format phone number (ensure it has +52 prefix)
    const formattedPhone = phone.startsWith('+52') ? phone : `+52${phone}`;

    // Prepare Close CRM payload
    const closePayload: CloseLeadPayload = {
      name: `${firstName} ${lastName}`,
      contacts: [
        {
          name: `${firstName} ${lastName}`,
          emails: [
            {
              email: email,
              type: 'work'
            }
          ],
          phones: [
            {
              phone: formattedPhone,
              type: 'work'
            }
          ]
        }
      ]
    };

    // Make request to Close CRM API
    const closeResponse = await fetch('https://api.close.com/api/v1/lead/', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.CLOSE_API_KEY + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(closePayload)
    });

    if (!closeResponse.ok) {
      const errorData = await closeResponse.text();
      console.error('Close CRM API Error:', {
        status: closeResponse.status,
        statusText: closeResponse.statusText,
        error: errorData,
        apiKey: process.env.CLOSE_API_KEY ? 'Present' : 'Missing',
        apiUrl: process.env.CLOSE_API_URL || 'Missing'
      });
      
      return res.status(500).json({ 
        error: 'Failed to create lead in CRM',
        status: closeResponse.status,
        details: process.env.NODE_ENV === 'development' ? errorData : `HTTP ${closeResponse.status}: ${closeResponse.statusText}`
      });
    }

    const leadData = await closeResponse.json();
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Lead created successfully',
      leadId: leadData.id
    });

  } catch (error) {
    console.error('Server error:', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
