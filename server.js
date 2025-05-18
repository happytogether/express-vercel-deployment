const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
// Parse URL-encoded form data (from POST like `application/x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const { ECCVS, price } = req.body;

  console.log('Product Name:', ECCVS);
  console.log('Product Price:', price);

  res.send(`Received product: ${ECCVS} at ${req.body}`);
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
