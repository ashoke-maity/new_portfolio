const dotenv = require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
};

module.exports = corsOptions;