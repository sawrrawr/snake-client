const net = require('net');
const connect = require('./client');
let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = (key) => {
  if (key === '\u0003') process.exit();
  if (key === '\u001b[A') {
    // console.log(`You moved UP`);
    connection.write(`Move: up`);
  }
  if (key === '\u001b[B') {
    // console.log(`You moved DOWN`);
    connection.write(`Move: down`);
  }
  if (key === '\u001b[D') {
    // console.log(`You moved LEFT`);
    connection.write(`Move: left`);
  }
  if (key === '\u001b[C') {
    // console.log(`You moved RIGHT`);
    connection.write(`Move: right`);
  }
};

module.exports = setupInput;