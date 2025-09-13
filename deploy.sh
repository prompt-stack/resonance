#!/bin/bash

echo "🚀 Deploying Resonance to Firebase Hosting"
echo ""
echo "Step 1: Please run this command in your terminal to login:"
echo "  firebase login"
echo ""
echo "Once logged in, press Enter to continue..."
read

echo "Step 2: Deploying to Firebase Hosting..."
firebase deploy --only hosting

echo ""
echo "✅ Deployment complete!"
echo "Your app should be live at: https://resonance-voice.web.app"
echo "Alternative URL: https://resonance-voice.firebaseapp.com"