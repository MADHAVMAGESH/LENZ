import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  }
});

// Auth service methods
export const authLogin = async (credentials) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const authRegister = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

// Papers service methods
export const fetchPapers = async () => {
  const response = await apiClient.get('/papers');
  return response.data;
};

export const fetchPaperById = async (id) => {
  const response = await apiClient.get(`/papers/${id}`);
  return response.data;
};

// Chat service methods
export const fetchMessages = async (chatId) => {
  const response = await apiClient.get(`/chat/${chatId}/messages`);
  return response.data;
};

export const sendMessage = async (chatId, messageData) => {
  const response = await apiClient.post(`/chat/${chatId}/messages`, messageData);
  return response.data;
};

// Export service methods
export const exportData = async (exportConfig) => {
  const response = await apiClient.post('/export', exportConfig);
  return response.data;
};