'use strict';

const io = require('socket.io-client')
const host = 'http://localhost:3000'
const socket = io.connect(host)
const caps = io.connect(`${host}/caps`)

caps.on('pickup', pickupHandler);
caps.on('in-transit', deliverHandler);

function pickupHandler(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`)
    caps.emit('in-transit', payload)
  }, 1000)
}

function deliverHandler(payload) {
  setTimeout( () => {
    console.log(`DRIVER: delivered ${payload.orderID}`);
    caps.emit('delivered', payload);
  }, 3000)
}

console.log('DRIVER CONNECTED');