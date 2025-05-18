const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.use(express.json());

app.post('/product', (req, res) => {
  const { ECCVS, price } = req.body;

  console.log('Product Name:', ECCVS);
  console.log('Product Price:', price);

  res.send(`Received product: ${ECCVS} at $${price}`);
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
