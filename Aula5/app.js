const express = require('express');

const app = express();
app.use(express.json());

//Rota para criar startus 
app.get('/status', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});