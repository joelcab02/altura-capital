# Meta Pixel Setup Guide

## ✅ Implementation Complete

Your Meta Pixel has been successfully integrated into your Altura Capital website! Here's what has been implemented:

### 📋 What's Been Done

1. **✅ Base Pixel Code Added** - `index.html`
   - Meta Pixel tracking script added to `<head>`
   - Automatic PageView tracking on all pages
   - Noscript fallback for users with JavaScript disabled

2. **✅ TypeScript Support** - `src/types/meta-pixel.d.ts`
   - Global `fbq` function declarations
   - Type safety for Meta Pixel events
   - IntelliSense support in your IDE

3. **✅ Lead Tracking Integration**
   - **SignupForm.tsx** - Tracks "Newsletter Signup" leads
   - **RegistroForm.tsx** - Tracks "Registration Form" leads
   - Automatic lead event firing on successful form submissions

### 🔧 Final Setup Steps

#### 1. Get Your Meta Pixel ID
1. Go to [Facebook Business Manager](https://business.facebook.com)
2. Navigate to **Events Manager**
3. Select your pixel or create a new one
4. Copy your **16-digit Pixel ID**

#### 2. Replace Placeholder ID
In `index.html`, replace `YOUR_PIXEL_ID` with your actual Pixel ID:
```html
fbq('init', 'YOUR_ACTUAL_PIXEL_ID_HERE');
```

Also update the noscript tag:
```html
<img height="1" width="1" style="display:none"
     src="https://www.facebook.com/tr?id=YOUR_ACTUAL_PIXEL_ID_HERE&ev=PageView&noscript=1" />
```

### 📊 Events Being Tracked

| Event | Trigger | Location | Details |
|-------|---------|----------|---------|
| **PageView** | Every page load | Automatic | All website visitors |
| **Lead** | Newsletter signup | SignupForm.tsx | Newsletter leads |
| **Lead** | Registration form | RegistroForm.tsx | User registration |

### 🧪 Testing Your Implementation

#### Method 1: Meta Pixel Helper (Recommended)
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) browser extension
2. Visit your website
3. Click the extension icon - should show:
   - ✅ PageView events firing
   - ✅ Pixel properly installed

#### Method 2: Facebook Events Manager
1. Go to Events Manager in Facebook Business
2. Select your pixel
3. Check **Test Events** tab for real-time activity
4. Submit forms to see Lead events appear

#### Method 3: Browser Developer Tools
1. Open DevTools (F12)
2. Go to **Network** tab
3. Filter by "facebook"
4. Should see requests to `facebook.net/tr` on page loads and form submissions

### 🎯 Lead Conversion Tracking

Your forms now automatically track leads with these parameters:

**SignupForm (Newsletter):**
```javascript
fbq('track', 'Lead', {
  content_name: 'Newsletter Signup',
  content_category: 'Lead Generation',
  value: 0.00,
  currency: 'MXN'
});
```

**RegistroForm (Registration):**
```javascript
fbq('track', 'Lead', {
  content_name: 'Registration Form',
  content_category: 'User Registration',
  value: 0.00,
  currency: 'MXN'
});
```

### 🔍 Troubleshooting

**Pixel Not Firing?**
- Check browser console for JavaScript errors
- Verify Pixel ID is correct (16 digits)
- Ensure no ad blockers are interfering

**Lead Events Not Tracking?**
- Test form submissions manually
- Check that forms are successfully submitting
- Verify `window.fbq` is available in browser console

**TypeScript Errors?**
- Run `npm install` to install dependencies
- The type declarations in `src/types/meta-pixel.d.ts` will resolve TS errors

### 🚀 Next Steps

1. **Replace Pixel ID** with your actual ID
2. **Test thoroughly** using Meta Pixel Helper
3. **Set up Facebook Ads** campaigns targeting your tracked events
4. **Create Custom Audiences** from your website visitors
5. **Set up Conversions API** for server-side tracking (advanced)

### 📈 Facebook Ads Integration

With your pixel installed, you can now:
- Create **Custom Audiences** from website visitors
- Set up **Lookalike Audiences** based on leads
- Track **ROI** from Facebook ad campaigns
- Optimize ads for **Lead** conversions
- Retarget visitors who didn't convert

Your Meta Pixel is ready to start collecting valuable data for your Altura Capital marketing campaigns! 🎉
