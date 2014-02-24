var connect = require('connect'),
    sharejs = require('share').server;

var server = connect(
      connect.logger(),
      connect.static(__dirname + '/public')
    );

var options = {db: {type: 'none'}}; // See docs for options. {type: 'redis'} to enable persistance.

// Attach the sharejs REST and Socket.io interfaces to the server
sharejs.attach(server, options);

server.listen(82);
console.log('Server running.');