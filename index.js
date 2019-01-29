const express = require('express');
const app = express();
const router = require('./routes/api.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(router);

app.listen(process.env.port || 3000,function(){
  console.log("Listening at Port 3000");
});
