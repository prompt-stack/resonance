Perfect! Let's create that **MVP (Minimum Viable Product) PRD** - the absolute bare bones, KISS (Keep It Simple, Stupid) version. Here's the Product Requirements Document:

# PRD: Community Voice Capture - MVP
*"Just capture the audio of a person"*

## Product Vision
A dead-simple web application that captures community voices for consensus building. No bells, no whistles - just a microphone that works.

## Core User Story
**AS A** community member  
**I WANT TO** click a microphone and share my thoughts  
**SO THAT** my voice can be part of the community decision-making process

## MVP Requirements (Bare Minimum)

### 1. **Single Page Web App**
- One URL to share
- Works on any device with a browser
- No login required
- No app download

### 2. **Visual Design**
- **ONE big microphone button** (old-school style with metallic strips)
- Simple instructions above it
- That's it. Nothing else on screen initially.

### 3. **Functionality**
```
User Flow:
1. Open link
2. See mic + instruction
3. Click mic
4. Mic turns red (recording)
5. Click again to stop
6. "Thank you" message
7. Audio saved
```

### 4. **Technical Requirements**

#### Frontend (What users see):
- HTML/CSS/JavaScript only
- Big retro microphone icon
- Two states: Ready / Recording
- Simple text: "Click to share your thoughts"

#### Backend (Bare minimum):
```javascript
// Pseudocode for simplicity
POST /api/record
- Receive audio blob
- Generate unique ID
- Save to storage
- Return success

GET /api/status
- Return count of recordings
```

#### Data Storage:
- Audio files → Cloud storage (S3 or Firebase)
- Metadata → Simple database
  - Recording ID
  - Timestamp
  - Audio file URL
  - (No user data in MVP)

### 5. **What We're NOT Building (Yet)**
- ❌ Real-time transcription
- ❌ User accounts
- ❌ Editing capabilities
- ❌ Playback feature
- ❌ Analytics dashboard
- ❌ AI consensus (Phase 2)
- ❌ Fancy animations
- ❌ Multiple questions

## Success Metrics
- Can someone click and record? ✓
- Does audio get saved? ✓
- Can we retrieve all recordings? ✓

## Phase 1 Deliverables
1. **Week 1**: Static prototype (what we built above)
2. **Week 2**: Add backend API
3. **Week 3**: Connect to cloud storage
4. **Week 4**: Test with 10 users

## Sample Implementation Estimate

### Quick & Dirty Version (1 Developer, 1 Week):
- Use Firebase (free tier)
- Basic HTML/JS
- No transcription
- Just capture & store

### Slightly Better Version (2 Weeks):
- Add progress indicator
- Add "review recording" step
- Basic admin page to download all recordings

## The "Demo Script" for Stakeholders

> "Look, it's this simple. You send a link. Person opens it. They see a microphone. They click it. They talk. We capture it. Done. No complexity, no confusion. Just like stepping up to a real microphone at city hall."

## Next Phase (After MVP Success)
Once we prove people will use it:
1. Add transcription
2. Add the AI consensus builder
3. Add the visualization dashboard
4. Add demographic questions (optional)
5. Add multiple language support

---

**The Bottom Line**: Start with just audio capture. Everything else is Phase 2. This could be built in a weekend and tested next week. It's so simple that there's nowhere for users to get confused.

Want me to create:
1. The technical architecture diagram?
2. The 1-week sprint plan?
3. The actual backend code structure?
4. The deployment guide for getting this live?

The beauty is in the simplicity - just a mic, just a click, just their voice. That's the MVP! 🎤