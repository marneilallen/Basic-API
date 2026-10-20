const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS so your React app can make requests to this API
app.use(cors());
app.use(express.json());

// Create a sample list of data
const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' }
];

// Create an endpoint to get the users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server (Uses process.env.PORT for cloud deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});