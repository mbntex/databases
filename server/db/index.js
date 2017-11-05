var mysql = require('mysql');

var con = mysql.createConnection ({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
  database: 'chat'
});

con.connect(function (err) {
  if (err) {
    console.log (err);
    throw err;
  }
  console.log ('Connected to mySQL!');
});
 


module.exports.con = con; 


/*
ROWS =  [ 
  RowDataPacket { ID: 1, USER: 'bob', MESSAGE: 'omg it aint sunny anymore', ROOM: 'lobby' },
  RowDataPacket { ID: 2, USER: 'kelly', MESSAGE: 'run man run!', ROOM: 'lobby' },
  RowDataPacket { ID: 3, USER: 'sal', MESSAGE: 'where are we?', ROOM: 'room 18' },
  RowDataPacket { ID: 4, USER: 'heisenberg', MESSAGE: 'is this the right turn?', ROOM: 'bb' },
  RowDataPacket { ID: 5, USER: 'bob', MESSAGE: 'make a decision.', ROOM: 'lobby' } ]

*/



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".




