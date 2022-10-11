let net = require('net'); 
let server = net.createServer();

server.listen(port, host, () => { 
    console.log(`TCP server listening on ${host}:${port}`); 
}); 
    
server.on('connection',  (socket) => { 
    var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
    console.log(`new client connected: ${clientAddress}`); 
}); 

socket.on('data', (data) => { 
    console.log(`${clientAddress}: ${data}`); 
}); 
socket.on('close',  () => { 
    console.log(`connection closed: ${clientAddress}`); 
}); 
  socket.on('error', (err) => { 
    console.log(`Error occurred in ${clientAddress}: ${err.message}`); 
}); 
