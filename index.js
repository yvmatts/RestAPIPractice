const express = require('express');
const app = express();
const router = require('./routes/api.js');


app.listen(process.env.port || 3000,function(){
  console.log("Listening at Port 3000");
});
