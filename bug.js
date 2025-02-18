const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  // Accessing req.body.name here will cause an error if the client doesn't send name
  res.send({ message: `User ${req.body.name} created.` });
});
app.listen(3000, () => console.log('Server listening on port 3000'));