const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Check if req.body exists and contains the necessary data
  if (req.body && req.body.name) {
    console.log(req.body);
    res.send({ message: `User ${req.body.name} created.` });
  } else {
    res.status(400).send({ error: 'Missing name in request body' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));