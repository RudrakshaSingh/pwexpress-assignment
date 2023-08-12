// Build a Server that Generates Random Number Using Express
//  ‘/random’ → send random number in response {random:10}
const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.send(JSON.stringify({ random: randomNum }));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
