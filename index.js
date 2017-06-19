var express = require('express');
var app = express();
var socket =  require('socket.io');

var server = app.listen(3000,function(){
    console.log('listening to the 3000 port');
});

app.use(express.static('public'));


//socket setup
var io = socket(server); //socket.io to work on this server

io.on('connection',function(socket){   //socket will be diff for every client
  console.log('made socket connection '+socket.id);

    socket.on('chat' , function(data){
        console.log(data);
        io.sockets.emit('chat', data);
      });

      // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

    socket.on('nottyping', function(data){
        socket.broadcast.emit('nottyping', data);
    });
});
