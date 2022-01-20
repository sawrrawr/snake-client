const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log(`Successfully connected to the game server`);
    () => {
      conn.write('Name: SMW');
    }
  });
    
    // conn.on('connect', () => {
    //   setTimeout(() => {
    //     conn.write('Move: up')}, 1000
    //   );
   
    //   setTimeout(() => {
    //     conn.write('Move: right')}, 2000
    //   );
 
    //   setTimeout(() => {
    //     conn.write('Move: down')}, 3000
    //   );
    // });



  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;