var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)

server.listen(process.env.PORT || 3000); 

app.use(express.static('.'));

io.on('connection', function(socket) {
  socket.on('chat message', function(message){

      io.emit('chat message', message);

      console.log('message: ' + message);

  });

});