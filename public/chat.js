//make connection

var socket = io.connect('http://localhost:3000');


var message = document.getElementById('message');
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');
      feedback = document.getElementById('feedback');

//Event emit when someone clicks button

function myFunction(){
  console.log("not Typing");
socket.emit('nottyping', handle.value);
}

socket.on('nottyping', function(data){
    feedback.innerHTML = '<p><em></em></p>';
});

btn.addEventListener('click',function(){

  socket.emit('chat', {
    msg : message.value,
    handle: handle.value

  });
message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

socket.on('chat', function(data){
     feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.msg + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
