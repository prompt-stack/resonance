const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'recordings');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        cb(null, `voice_${timestamp}.webm`);
    }
});

const upload = multer({ storage });

// Serve static files (including images folder)
app.use(express.static(__dirname));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Upload endpoint
app.post('/api/upload', upload.single('audio'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No audio file provided' });
    }
    
    console.log(`Audio saved: ${req.file.filename}`);
    res.json({ 
        success: true, 
        filename: req.file.filename,
        size: req.file.size 
    });
});

// Get recording count
app.get('/api/status', (req, res) => {
    const files = fs.readdirSync(uploadsDir);
    const audioFiles = files.filter(f => f.endsWith('.webm'));
    res.json({ 
        count: audioFiles.length,
        files: audioFiles 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🎤 Community Voice Tool Running!`);
    console.log(`📍 Open: http://localhost:${PORT}`);
    console.log(`📁 Recordings saved to: ${uploadsDir}\n`);
});