var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    fbID :{
        type : Number
      },
        
      name :{
        type : String
      },
     
      email :{
        type: String
      }
});

var User = module.exports = mongoose.model('user',UserSchema);