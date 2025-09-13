# Security & Privacy Guide for Resonance

## Current Security Model

### Firebase Storage Rules
The recordings are stored in Firebase Storage with the following security model:

1. **Public Write (Upload)**: ✅ Anyone can submit recordings
   - This is intentional - community members need to share their voice without barriers
   - Limited to audio files only
   - Maximum file size: 50MB

2. **Private Read (Download)**: 🔒 Recordings are NOT publicly accessible
   - No one can download or access recordings via public URLs
   - Recordings can only be accessed through Firebase Admin SDK
   - This prevents unauthorized access to community voices

### Data Collection
- **No personal information collected**: No names, emails, or identifying data
- **Anonymous submissions**: All recordings are anonymous by design
- **No tracking**: No cookies, analytics, or user tracking

## Accessing Recordings (Admin Only)

To access recordings as an administrator, you'll need to:

1. Use Firebase Admin SDK with service account credentials
2. Access through Firebase Console (requires authentication)
3. Use Firebase CLI with proper authentication

### Option 1: Firebase Console
1. Go to https://console.firebase.google.com
2. Select your project (resonance-voice)
3. Navigate to Storage
4. Browse recordings folder

### Option 2: Admin Script (Recommended)
Create a Node.js script with Firebase Admin SDK:

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'resonance-voice.firebasestorage.app'
});

const bucket = admin.storage().bucket();

// List all recordings
async function listRecordings() {
  const [files] = await bucket.getFiles({ prefix: 'recordings/' });
  return files;
}

// Download a specific recording
async function downloadRecording(fileName, localPath) {
  await bucket.file(fileName).download({
    destination: localPath
  });
}
```

## Updating Security Rules

The `storage.rules` file contains three security options:

1. **Most Secure** (current): No public read access at all
2. **Authenticated Only**: Requires user authentication
3. **Admin Only**: Specific admin UIDs only

To deploy security rules:
```bash
firebase deploy --only storage
```

## Privacy Best Practices

1. **Regular Cleanup**: Delete old recordings after processing
2. **Access Logs**: Monitor who accesses recordings via Firebase Console
3. **Secure Keys**: Never commit service account keys to Git
4. **HTTPS Only**: All traffic is encrypted via HTTPS
5. **No CDN Caching**: Recordings are not cached on CDN

## GDPR/Privacy Compliance

- Users are informed their voice is being recorded
- No personal data is collected
- Recordings are used only for stated purpose (community development)
- Consider adding a privacy policy link if required by local laws

## Questions?

For security concerns or questions, please create an issue on GitHub with the "security" label.