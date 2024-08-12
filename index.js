const { readFile } = require('fs/promises');
const express = require('express');

const app = express();
app.use(express.json());


app.post('/', async (req, res) => {
  const file = await readFile('16kb.txt');
  console.log(req.body);
  res.send(file.toString());
});


app.listen(3000);