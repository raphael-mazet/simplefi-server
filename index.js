const express = require('express');
const router = require('./router');
const cors = require('cors');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3020;

const corsConfig = {
  origin: process.env.NODE_ENV === 'production' ? 'https://simplefi.finance' : 'http://localhost:3000',
  credentials: true,
};

app.use(express.json());
app.use(cors(corsConfig));
app.use(router);

app.listen(port, () => {
  console.log(' ---> process.env.NODE_ENV', process.env.NODE_ENV);
  console.log(`SimpleFi server listening on localhost:${port} 🎉`)
});