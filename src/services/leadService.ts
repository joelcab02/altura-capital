interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  leadId?: string;
  error?: string;
  details?: string;
}

export const submitLead = async (leadData: LeadData): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const data: ApiResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit lead');
    }

    return data;
  } catch (error) {
    console.error('Lead submission error:', error);
    
    return {
      success: false,
      message: 'Error al enviar la información. Por favor, inténtalo de nuevo.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
