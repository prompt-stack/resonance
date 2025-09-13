# 🔒 URGENT: Secure Your Firebase API Key

## Immediate Steps to Take:

### 1. Add API Key Restrictions (Do This NOW!)
1. Go to: https://console.cloud.google.com/apis/credentials?project=resonance-voice
2. Find your API key: `AIzaSyB-sqaJWG9R5i8eu4HUN43Yn95HgnX4CGE`
3. Click on it to edit
4. Add these restrictions:

#### Application Restrictions:
- Select "HTTP referrers (websites)"
- Add these allowed referrers:
  ```
  https://resonance-voice.web.app/*
  https://resonance-voice.firebaseapp.com/*
  http://localhost:3000/*
  ```

#### API Restrictions:
- Select "Restrict key"
- Enable only these APIs:
  - Firebase Installations API
  - Firebase Cloud Storage API
  - Identity Toolkit API (if using Auth)

### 2. Monitor Your Usage
- Check Firebase Console: https://console.firebase.google.com/project/resonance-voice/usage
- Look for unusual spikes in API calls or storage usage
- Review Cloud Logging for suspicious activity

### 3. Security Rules Are Your Real Protection
Your Firebase Storage rules are already secure:
- ✅ Write-only for recordings (public can upload)
- ✅ No read access (recordings are private)
- ✅ File size and type restrictions

### 4. Consider These Additional Steps:

#### Option A: Keep API Key Public (Recommended for Firebase)
Firebase API keys are meant to be public when properly restricted. Just ensure:
- ✅ API key restrictions are in place
- ✅ Security rules are tight (yours are good!)
- ✅ Monitor usage regularly

#### Option B: Use Environment Variables (For Extra Caution)
If you want to hide the key anyway:

1. Create `.env.local`:
```javascript
VITE_FIREBASE_API_KEY=AIzaSyB-sqaJWG9R5i8eu4HUN43Yn95HgnX4CGE
VITE_FIREBASE_AUTH_DOMAIN=resonance-voice.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=resonance-voice
VITE_FIREBASE_STORAGE_BUCKET=resonance-voice.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1059751061036
VITE_FIREBASE_APP_ID=1:1059751061036:web:91f291b54f80baf3e95389
```

2. Update app.js to use environment variables
3. Add `.env.local` to .gitignore

### 5. If You See Suspicious Activity:
1. Regenerate the API key immediately in Google Cloud Console
2. Update your app with the new key
3. Review and tighten security rules
4. Check for unauthorized data in Firebase Storage

## Important Notes:
- **Firebase API keys are different from server keys** - they're designed to be in client-side code
- **Security Rules are your main protection** - not hiding the API key
- **API key restrictions prevent abuse** - even if the key is public

## Resources:
- [Firebase Security Best Practices](https://firebase.google.com/docs/projects/api-keys)
- [Google Cloud API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

---

**Take Action NOW**: The most important step is adding API key restrictions in the Google Cloud Console!