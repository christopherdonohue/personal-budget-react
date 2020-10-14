const express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  cors = require("cors");
  var fs = require('fs');
  const budget = JSON.parse(fs.readFileSync('budgetData.json', 'utf8'));
  
  app.use(cors());
  
  
  app.get('/budget', (req, res) => {
      res.json(budget);
  });
  
  app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`) 
  });


