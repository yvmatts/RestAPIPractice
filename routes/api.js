const express = require('express');
const router = express.Router();
const Taxi = require('../models/taxi.js');
router.get('/taxi',function(req,res,next){
  res.send({type:'GET'});
});

router.post('/taxi',function(req,res,next){

  var t = new Taxi(req.body);
  t.save().then(function(taxi){
    res.send(taxi);
  }).catch(next);

});

router.put('/taxi/:dl',function(req,res,next){
  Taxi.findOneAndUpdate({dlNo:req.params.dl},req.body).then(function(){
    Taxi.findOne({dlNo:req.params.dl}).then(function(taxi){
      res.send(taxi);
    });
  }).catch(next);
});

router.delete('/taxi/:dl',function(req,res,next){
  Taxi.findOneAndDelete({dlNo:req.params.dl}).then(function(taxi){
    res.send(taxi);
  }).catch(next);
});

module.exports = router;
