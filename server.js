var express = require(‘express’),
    server = require(‘http’).Server(app),
    io = require(‘socket.io’)(server)

server.listen(8000); 

app.use(express.static(‘.’)