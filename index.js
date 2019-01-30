const express = require('express');
const app = express();
const router = require('./routes/api.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Database Connection
mongoose.connect("mongodb://localhost/taxigo",{useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log("Connected");
}).on('error',function(error){
    console.log(error);
});
mongoose.Promise = global.Promise;


//Middleware

//BodyParser
app.use(bodyParser.json());
//API Routes
app.use(router);
//ErrorHandling
app.use(function(err,req,res,next){
  res.send({error:err.message});
});


app.listen(process.env.port || 3000,function(){
  console.log("Listening at Port 3000");
});
