const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxiSchema = new Schema({
  name:{
        type:String,
        required:[true,'Name field is required']
       },

  dlNo:{
        type:String,
        required:[true,'DL field is required']
       },

  car:{
        type:String,
        required:[true,'Car field is required']
      },

  available:{
              type:Boolean,
              default:false
            }
});

const Taxi = mongoose.model('taxi',TaxiSchema);

module.exports = Taxi;
