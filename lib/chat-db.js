var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatapp',function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log("Connectd to MongoDB");
  }
});


var chatSchema =  mongoose.Schema({
    name : String,
    message : String
});

var Chat = mongoose.model('info',chatSchema);

exports.saveInfo = function(data){
  var newMsg = new Chat({name : data.handle,message : data.msg});
    newMsg.save(function(err){
      console.log(err);
    });

}
