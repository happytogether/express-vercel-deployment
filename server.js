const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
// Parse URL-encoded form data (from POST like `application/x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log('Full body:', req.body);             // Prints the whole object
  console.log('ECCVS value:', req.body.ECCVS);     // Access specific value

  res.send(`Got ECCVS: ${req.body.ECCVS}`);
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
