# Firebase Security Clarification

## What's Public vs Private

### ✅ SAFE to expose publicly (current app.js):
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyB-...",           // Project identifier only
    authDomain: "...",                // Public domain
    projectId: "...",                 // Project name
    storageBucket: "...",            // Storage URL
    messagingSenderId: "...",        // Sender ID
    appId: "..."                     // App identifier
};
```

**Why these are safe:**
- These are CLIENT-SIDE configuration values
- They only identify which Firebase project to connect to
- They don't grant any permissions by themselves
- Security is enforced by Firebase Security Rules (storage.rules)

### 🔴 NEVER expose publicly:
- Firebase Admin SDK private keys
- Service account credentials  
- OpenAI/Whisper API keys
- Stripe/payment processor keys
- Any key that starts with `sk_` or `private_`

## Current Security Model

Your app is already secure because:

1. **Storage Rules** enforce write-only access:
```javascript
allow write: if request.resource.size < 50 * 1024 * 1024
allow read: if false;  // No one can read recordings
```

2. **No Authentication** = No user data to protect

3. **Anonymous Uploads** = GDPR compliant by design

## Should You Use Environment Variables?

**For this app: Optional**
- Firebase client keys can stay in code
- Makes deployment simpler
- Google's official stance: these are safe to expose

**Use .env only if:**
- You add backend processing (OpenAI keys)
- You add payment processing
- You want to manage multiple environments (dev/staging/prod)
- Company policy requires it

## Best Practice for Open Source

```javascript
// Option 1: Keep as-is (Recommended for simplicity)
const firebaseConfig = {
    apiKey: "AIzaSyB-...",  // This is fine!
    // ...
};

// Option 2: Environment variables (if you prefer)
const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyB-...",
    // ...
};
```

## The Bottom Line

**Your Firebase API key is like your restaurant's address** - it needs to be public so people can find you. The door lock (Security Rules) is what keeps unwanted visitors out, not hiding the address.

For Resonance, keeping the Firebase config in code is perfectly safe and makes the project easier to deploy and understand.