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

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9 ]/g, "");
}

document.getElementById('submit').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    userInput = sanitizeInput(userInput);
    // Proceed with sanitized input
});


document.cookie = "sessionId=abc123; Secure; HttpOnly; SameSite=Strict";

const cleanHTML = DOMPurify.sanitize(userInput);
document.getElementById('output').innerHTML = cleanHTML;

// Bad practice
eval("alert('This can be dangerous!');");

// Better alternative
function safeFunction() {
    alert('This is safer!');
}
safeFunction();