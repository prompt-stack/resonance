# Resonance - Voice-First Feedback Platform

Transform feedback collection with the simplicity of voice. No applications to download, no user accounts required - just tap and talk.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://resonance-voice.web.app)
[![Firebase](https://img.shields.io/badge/firebase-hosting-orange)](https://firebase.google.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## Overview

Resonance is an ultra-lightweight voice collection platform that makes gathering authentic feedback as simple as pressing a button. Built with modern web technologies and a vintage aesthetic, it's designed for instant deployment and infinite scalability.

## Key Features

- **One-Tap Recording** - No app downloads, no user accounts required
- **Multi-Tenant Architecture** - Unlimited organizations from single deployment  
- **Anonymous by Design** - GDPR/CCPA compliant, no personal data collected
- **Mobile-First** - Works perfectly on any device
- **Instant Setup** - Organizations create custom portals in 30 seconds
- **Firebase Backend** - Scales automatically with minimal costs

## Technology Stack

### Frontend
- HTML5 Web Audio API for browser-native recording
- Vanilla JavaScript with zero dependencies
- CSS3 with responsive design
- Progressive Web App capabilities

### Backend
- Firebase Hosting with global CDN
- Firebase Storage for audio file management
- Firebase Security Rules for access control
- Cloud Functions ready for processing pipeline

### Optional AI Pipeline
- OpenAI Whisper API for audio transcription
- GPT-4 API for theme synthesis
- AssemblyAI for sentiment analysis

## Use Cases

### Community Engagement
- Municipal planning departments
- Economic development agencies
- Community organizations
- Public consultation requirements

### Enterprise Applications
- Employee feedback and exit interviews
- Customer experience capture
- Product testing and reviews
- Team retrospectives and pulse checks

### Healthcare & Research
- Patient experience feedback
- Clinical trial participant diaries
- Qualitative research data collection
- Mental health check-ins

### Education
- Student voice initiatives
- Course evaluations
- Campus climate assessments
- Parent feedback collection

## Architecture

```
Browser Web Audio -> Firebase Hosting -> Firebase Storage
                           |
                           v
                    Optional AI Pipeline
                    (Transcription & Analysis)
```

## Project Structure

```
resonance/
├── index.html                 # Landing page
├── pages/                     # Application pages
│   ├── voice.html            # Recording interface
│   ├── organizations.html    # Organization information
│   ├── create.html           # Portal generator
│   ├── admin.html            # Admin dashboard
│   ├── analytics.html        # Campaign analytics
│   └── report-example.html   # Sample report
├── css/                       # Stylesheets
│   ├── main.css              # Primary styles
│   └── mobile.css            # Mobile overrides
├── js/                        # JavaScript
│   └── app.js                # Core application logic
├── images/                    # Assets
├── docs/                      # Documentation
├── storage.rules             # Firebase security rules
├── firebase.json             # Firebase configuration
└── package.json              # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js and npm installed
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase project created

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/resonance.git
cd resonance
```

2. Install dependencies
```bash
npm install
```

3. Configure Firebase
```bash
firebase login
firebase init
```

4. Deploy to Firebase
```bash
firebase deploy
```

### Configuration

Firebase configuration in `js/app.js`:
```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

Note: Firebase client-side configuration keys are safe to expose publicly. Security is enforced through Firebase Security Rules.

### Storage Rules

Configure `storage.rules` for secure write-only access:
```javascript
match /recordings/{org}/{recording} {
  allow write: if request.resource.size < 50 * 1024 * 1024
               && request.resource.contentType.matches('audio/.*');
  allow list: if true;
  allow read: if false;
}
```

## Business Model

### Subscription Tiers
- **Basic**: $99/month - 100 voices, transcription included
- **Professional**: $299/month - 500 voices, basic analytics
- **Enterprise**: $999/month - Unlimited voices, AI synthesis
- **Campaign**: $500-2000 - 30-60 day project-based pricing

### Unit Economics
- Transcription cost: $0.006 per minute
- Average recording: 2-3 minutes
- Cost per voice: ~$0.02
- Revenue per voice: $2-10
- Gross margin: >95%

## API Integration

### Voice Submission Endpoint (Planned)
```
POST /api/voice
Content-Type: application/json

{
  "orgId": "organization-id",
  "audio": "base64_encoded_audio",
  "duration": 134
}
```

### Transcript Retrieval (Planned)
```
GET /api/transcripts/:orgId

Response:
{
  "transcripts": [...],
  "count": 47,
  "totalDuration": 6234
}
```

## Performance Metrics

- Page Load: < 1 second
- Time to Interactive: < 2 seconds  
- Recording Start: Instant
- Upload Speed: 1-3 seconds per minute of audio
- Lighthouse Score: 98/100

## Security & Privacy

- No personal data collection
- Write-only storage permissions
- HTTPS encryption for all traffic
- GDPR/CCPA compliant by design
- Configurable data retention policies

## Testing

```bash
# Start local development server
npm start

# Run mobile device tests
npx playwright test --device="iPhone 15"

# Generate screenshots for documentation
npm run screenshots
```

## Contributing

We welcome contributions. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Priority Areas
- Multi-language support
- Emotion detection integration
- WhatsApp/SMS voice collection
- Advanced analytics dashboard
- Accessibility improvements (WCAG 2.1 AA)

## Support

- Documentation: [docs/](docs/)
- Issues: [GitHub Issues](https://github.com/yourusername/resonance/issues)
- Email: support@resonance.app

## License

MIT License - See [LICENSE](LICENSE) file for details

## Acknowledgments

- Firebase for infrastructure
- OpenAI Whisper for transcription capabilities
- Community members who believe every voice matters

---

Built with simplicity and purpose. Serving communities with authentic voice.