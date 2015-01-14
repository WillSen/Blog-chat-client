var express = require('express'),
    server = require('http').Server(app),
    io = require('socket.io')(server)

server.listen(process.env.PORT || 3000); 

app.use(express.static('.')

io.on('connection', function(socket) {}