const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(Start.json());

// Sample GET endpoint
app.get('/', (req, res) => {
  res.send('Code by DDprog!');
});

// Sample POST endpoint to receive JSON data
app.post('/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});