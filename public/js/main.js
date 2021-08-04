const socket = io('/');
socket.on('connect',()=> {
    console.log('successfully connected to wss server');
    console.log(socket.id)
}) 