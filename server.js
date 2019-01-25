const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/restaurants/:id', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// app.use(bodyParser.text())
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})