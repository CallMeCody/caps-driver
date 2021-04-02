'use strict';

const io = require('socket.io-client')
const host = 'http://localhost:3001'
const socket = io.connect(host)

function handlePickup(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    socket.emit('in-transit', payload)
  }, 1000)

  setTimeout(() => {
    console.log(`DRIVER: Delivered' ${payload.orderID}`);
    socket.emit('delivered', payload)
  }, 3000)
}

socket.on('pickUp', handlePickup) 

module.exports = handlePickup

console.log('DRIVER CONNECTED');