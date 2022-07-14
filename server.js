const { PeerServer } = require('peer');
require('dotenv').config({ path: './config/.env' });
const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/myapp',
});
