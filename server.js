var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)

server.listen(process.env.PORT || 3000); 

app.use(express.static('.'));

io.on('connection', function(socket) {
  socket.on('chat message', function(msg){

      io.emit('chat message', msg);

      console.log('message: ' + msg);

  });

});