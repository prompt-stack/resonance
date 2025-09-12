# Resonance

> Amplifying community voices through simple, accessible audio collection

## What is Resonance?

Resonance transforms community engagement by removing every barrier between a person and sharing their voice. With just one click, community members can record their thoughts, opinions, and ideas - creating a chorus of authentic feedback that resonates with decision-makers.

## ✨ Features

- **One-Click Recording** - No apps, no logins, no friction
- **Universal Access** - Works on any device with a browser
- **Cloud Storage** - Firebase integration for scalable storage
- **Privacy First** - No personal data collected
- **Lightweight** - Single HTML file + minimal backend

## 🚀 Quick Start

### Option 1: Local Development

```bash
# Clone the repo
git clone https://github.com/prompt-stack/resonance.git
cd resonance

# Install dependencies
npm install

# Start the server
npm start

# Open http://localhost:3000
```

### Option 2: Firebase Deployment (Recommended)

See [SETUP_FIREBASE.md](SETUP_FIREBASE.md) for 5-minute deployment guide.

## 📁 Project Structure

```
resonance/
├── index.html           # Local version UI
├── index-firebase.html  # Cloud version (Firebase)
├── server.js           # Simple Node.js backend
├── package.json        # Dependencies
├── firebase.json       # Firebase hosting config
└── recordings/         # Local audio storage
```

## 🎯 Use Cases

- Community feedback sessions
- Town hall voice collection
- User research interviews
- Voice-of-customer gathering
- Public opinion sampling
- Accessibility-first surveys

## 🛠 Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express, Multer
- **Storage**: Local filesystem or Firebase Storage
- **Deployment**: Firebase Hosting (free tier)

## 📊 Free Tier Limits (Firebase)

- 5 GB storage (~1000 recordings)
- 1 GB/day bandwidth
- 20K/day operations
- Perfect for community projects

## 🤝 Contributing

Contributions welcome! Resonance is built on the principle of radical simplicity. Any PR that maintains or improves that simplicity will be considered.

## 📝 License

MIT - Use freely for your community

## 🙏 Acknowledgments

Built with the belief that every voice matters and technology should amplify, not gatekeep, community participation.

---

**Created by [Prompt Stack](https://github.com/prompt-stack)**