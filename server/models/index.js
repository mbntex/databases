var db = require('../db');
var corsHeaders = require('../controllers');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('DB FUNCTION RAN!!!!'); 
      db.con.query('SELECT * FROM messages', function (err, rows, fields) {
        if (err) { callback(err, null); }
        // console.log('FINAL DATA SENT = ', {results: rows});
        callback(null, rows);
      });
      

// ///WHY NOT? ASK TOMMY
//       get: function (req, res) {
//       console.log('DB FUNCTION RAN!!!!'); 
//       var status = 200;
//       res.writeHead(status, corsHeaders.corsHeaders);
//       db.con.query('SELECT * FROM messages', function (err, rows, fields) {
//         if (err) { throw err; }
//         console.log('FINAL DATA SENT = ', {results: rows});
//         res.end(JSON.stringify({results: rows}));
//       });
/////////////////
    },


    post: function (bodyMessage) {
      console.log ('the models post got called');
      console.log ('The post with the most: ' + bodyMessage);
      //db.con.query('INSERT INTO messages VALUES (null, "lala", "something", "lobby");');
      var queryHere = 'INSERT INTO messages VALUES (null, "' + bodyMessage.username + '", "' + bodyMessage.text + '", "' + bodyMessage.roomname + '");';      
      db.con.query(queryHere);
    }
  },



  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

