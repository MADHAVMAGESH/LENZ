const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample routes setup
// Auth routes
app.use('/auth', require('./routes/auth'));

// Question papers routes
app.use('/question-papers', require('./routes/questionPapers'));

// Chat routes
app.use('/chat', require('./routes/chat'));

// Export server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;