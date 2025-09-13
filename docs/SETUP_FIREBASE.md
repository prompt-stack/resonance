# 🚀 Firebase Setup - 5 Minutes to Deploy

## Quick Setup Steps

### 1. Create Firebase Project (2 min)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create Project"
3. Name it: `community-voice` (or anything)
4. Disable Google Analytics (faster setup)
5. Click "Create Project"

### 2. Get Your Config (1 min)
1. In Firebase Console, click the **gear** ⚙️ → Project Settings
2. Scroll down to "Your apps"
3. Click the **Web icon** (</>) 
4. Register app with nickname: `voice-app`
5. Copy the config object that appears

### 3. Enable Storage (1 min)
1. In Firebase Console sidebar: **Build** → **Storage**
2. Click "Get Started"
3. Choose "Start in test mode" (for now)
4. Choose nearest location
5. Click "Done"

### 4. Update Your Code (30 sec)
1. Open `index-firebase.html`
2. Find the section marked `// ⚠️ REPLACE THIS WITH YOUR FIREBASE CONFIG`
3. Replace the placeholder config with your actual config:

```javascript
const firebaseConfig = {
    apiKey: "AIza...",            // Your actual values
    authDomain: "community-voice.firebaseapp.com",
    projectId: "community-voice",
    storageBucket: "community-voice.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

### 5. Deploy to Firebase (1 min)

```bash
# Install Firebase CLI (one time only)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project (run in project folder)
firebase init hosting
# - Use existing project
# - Public directory: . (just a dot)
# - Single-page app: No
# - Don't overwrite index.html

# Deploy!
firebase deploy
```

## 🎉 Done!

Your app is now live at:
- `https://YOUR-PROJECT.web.app`
- `https://YOUR-PROJECT.firebaseapp.com`

Share the link and start collecting voices!

## Storage Limits (Free Tier)
- **5 GB** storage
- **1 GB/day** download
- **20K/day** upload operations
- Perfect for ~1000 recordings

## Optional: Secure Your Storage

After testing, update Storage rules:
```javascript
// Only allow uploads, no downloads/deletes
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /recordings/{fileName} {
      allow write: if request.resource.size < 10 * 1024 * 1024; // Max 10MB
      allow read: if false;
    }
  }
}
```

## View Your Recordings

In Firebase Console:
1. Go to **Storage** 
2. Click on `recordings/` folder
3. All audio files are there!
4. Click any file → 3 dots menu → Download