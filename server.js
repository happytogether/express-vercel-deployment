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
  } else if (req.query.store === "711") {
     res.sendFile(path.join(__dirname, '/711.html'));
  } else {
    res.send(`沒有提供超商物流`);
  }
});


app.post('/', (req, res) => {
  console.log('Full body:', req.body);             // Prints the whole object
  console.log('ECCVS value:', req.body.ECCVS);     // Access specific value
  if(req.body.ECCVS) {
      //res.send(`Got ECCVS: ${req.body.ECCVS}`);
      res.redirect('https://teacherguo.myshopify.com/cart?callback_data=&store_type=seven_eleven&store_id=264211&store_name=%E4%B8%89%E7%94%B0%E9%96%80%E5%B8%82&store_address=%28%E8%B6%85%E5%95%86%29%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%89%E9%87%8D%E5%8D%80%E7%A6%8F%E7%94%B0%E9%87%8C%E4%B8%89%E6%B0%91%E8%A1%97274%E8%99%9F276%E8%99%9F1%E6%A8%93&store_zip=&store_longitude=&store_latitude=&store_remark=');

  } else if(req.body.eshopid) {
      res.send( `Got eshopid: ${req.body.eshopid}`);

  } else {
    res.send( `Got eshopid: family`);
  }
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
