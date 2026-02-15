const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios.post('https://api.sambanova.ai/v1/chat/completions', req.body, {
      headers: {
        'Authorization': 'Bearer 19acc4b9-3c0c-4778-a23c-5f9368792a57',
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy Error' });
  }
});

app.listen(3001, () => console.log('EchoTrack Proxy running on port 3001'));
