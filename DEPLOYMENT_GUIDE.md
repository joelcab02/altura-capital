# 🚀 Altura Capital - Close CRM Integration Deployment Guide

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Vercel account (free)

## 🔧 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Your environment variables are already configured in `.env.local`:
```
CLOSE_API_KEY=api_0z5TAQaMsN0NcUH0sU4H5y.656lYS68g0Cmn2auKWeD5T
CLOSE_API_URL=https://api.close.com/api/v1
```

### 3. Start Development Server
```bash
npm run dev
```
Your app will be available at: `http://localhost:5173`

### 4. Test the Form
1. Navigate to the homepage
2. Fill out the signup form
3. Submit and check for success message
4. Verify lead appears in Close CRM dashboard

## 🌐 Production Deployment (Vercel)

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
vercel env add CLOSE_API_KEY
vercel env add CLOSE_API_URL
```

### Option 2: Vercel Dashboard
1. Connect your GitHub repository to Vercel
2. Import the project
3. Add environment variables in Settings → Environment Variables:
   - `CLOSE_API_KEY`: `api_0z5TAQaMsN0NcUH0sU4H5y.656lYS68g0Cmn2auKWeD5T`
   - `CLOSE_API_URL`: `https://api.close.com/api/v1`
4. Deploy

## 📋 Integration Features

### ✅ What's Working
- **Secure API**: Vercel Function handles CRM communication
- **Form Validation**: Client-side and server-side validation
- **Loading States**: User feedback during submission
- **Error Handling**: Graceful error messages
- **Success Messages**: Confirmation after successful submission
- **Phone Formatting**: Automatic +52 Mexico prefix
- **Lead Source Tracking**: "Website Form - Altura Capital"

### 🔍 Testing Checklist
- [ ] Form loads correctly
- [ ] Validation works (required fields, email format)
- [ ] Loading spinner appears during submission
- [ ] Success message shows after submission
- [ ] Form resets after successful submission
- [ ] Error messages display for failures
- [ ] Lead appears in Close CRM with correct data

## 🛠️ Troubleshooting

### Common Issues
1. **API Function Not Found**: Ensure `/api/submit-lead.ts` is deployed
2. **Environment Variables**: Check they're set in Vercel dashboard
3. **CORS Errors**: Vercel Functions handle CORS automatically
4. **Close CRM Errors**: Verify API key is valid and has permissions

### Debug Steps
1. Check browser console for errors
2. Verify network requests in DevTools
3. Check Vercel Function logs in dashboard
4. Test API endpoint directly: `POST /api/submit-lead`

## 📊 Lead Data Structure
```json
{
  "name": "John Doe",
  "contacts": [{
    "name": "John Doe",
    "emails": [{"email": "john@example.com", "type": "office"}],
    "phones": [{"phone": "+525512345678", "type": "mobile"}]
  }],
  "custom": {
    "cf_source": "Website Form - Altura Capital"
  }
}
```

## 🔒 Security Notes
- API key is stored securely in environment variables
- `.env.local` is gitignored to prevent exposure
- Vercel Functions provide secure server-side processing
- Input validation prevents malicious data

---

**Ready to launch!** 🎉 Your Close CRM integration is complete and production-ready.
