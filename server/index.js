const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

//Go to https://developer.clashroyale.com and get a token to paste here.
const token = 'PasteYourTokenHere';

app.get('/api/cards', (req, res) => {
  axios.get('https://api.clashroyale.com/v1/cards', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => res.send(response.data))
    .catch(error => res.sendStatus(error.response.status));
});

app.get('/api/player/:playerTag', (req, res) => {
  axios.get(`https://api.clashroyale.com/v1/players/%23${req.params.playerTag}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => res.send(response.data))
    .catch(error => res.sendStatus(error.response.status));
});

app.get('/api/player/:playerTag/upcomingchests', (req, res) => {
  axios.get(`https://api.clashroyale.com/v1/players/%23${req.params.playerTag}/upcomingchests`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => res.send(response.data))
    .catch(error => res.sendStatus(error.response.status));
});

app.listen(port);