const createPeerServerListeners = (peerServer) => {
    peerServer.on('connection', (client) => {
      console.log('succesfully connecter to peer js server');
      console.log(client.id);
    });
  };
  
  module.exports = {
    createPeerServerListeners
  };