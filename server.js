const express = require("express");
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;
// Parse URL-encoded form data (from POST like `application/x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));

// sendFile will go here
app.get('/select-store', function(req, res) {
  if (req.query.store === "hilife") {
      res.sendFile(path.join(__dirname, '/hilife.html'));
  } else if (req.query.store === "family") {
     res.sendFile(path.join(__dirname, '/family.html'));
  } else if (req.query.store === "7-11") {
     res.sendFile(path.join(__dirname, '/711.html'));
  } else {
    res.send(`沒有提供超商物流`);
  }
});


app.post('/', (req, res) => {
  console.log('Full body:', req.body);             // Prints the whole object
  console.log('ECCVS value:', req.body.ECCVS);     // Access specific value

  res.send(`Got ECCVS: ${req.body.ECCVS}`);
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
