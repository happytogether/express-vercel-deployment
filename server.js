const express = require("express");
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;
// Parse URL-encoded form data (from POST like `application/x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));

// sendFile will go here
app.get('/select-store', function(req, res) {
  res.sendFile(path.join(__dirname, '/hilife.html'));
});


app.post('/', (req, res) => {
  console.log('Full body:', req.body);             // Prints the whole object
  console.log('ECCVS value:', req.body.ECCVS);     // Access specific value

  res.send(`Got ECCVS: ${req.body.ECCVS}`);
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
