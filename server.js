const express = require('express');
const runPuppeteer = require('./spider')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/scrap', async (req, res) => {
  const data = await runPuppeteer(req.body)
  return res.json(data);
});


app.listen(9000, () => console.log('Server started at http://localhost:9000'));