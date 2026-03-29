#!/bin/bash

# setup-backend.sh
# Node.js/Express server initialization script

# Update package list and install Node.js and npm
sudo apt update
sudo apt install -y nodejs npm

# Create a new directory for the backend
mkdir -p backend
cd backend

# Initialize a new Node.js project
npm init -y

# Install Express
npm install express

# Create a sample server file
cat <<EOL > server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
EOL

# Print completion message
 echo "Backend setup complete!"