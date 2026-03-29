#!/bin/bash

# Setting up the environment for a React Native/Expo project for LENZ

# Update dependencies
sudo apt update

# Install Node.js and npm
sudo apt install -y nodejs npm

# Install Expo CLI globally
npm install -g expo-cli

# Create a new Expo project for LENZ
expo init lenz --template blank

cd lenz

# Install necessary dependencies
npm install react-navigation react-navigation-stack
npm install axios

# Display completion message
echo "Frontend setup for LENZ completed!"