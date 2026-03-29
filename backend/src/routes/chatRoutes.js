const express = require('express');
const router = express.Router();

// Mock database
const messageHistory = [];

// Endpoint to send a message
router.post('/sendMessage', (req, res) => {
    const { sender, message } = req.body;
    if (!sender || !message) {
        return res.status(400).json({ error: 'Sender and message are required.' });
    }
    messageHistory.push({ sender, message, timestamp: new Date() });
    return res.status(200).json({ success: true, message: 'Message sent!' });
});

// Endpoint to get message history
router.get('/getHistory', (req, res) => {
    return res.status(200).json(messageHistory);
});

module.exports = router;