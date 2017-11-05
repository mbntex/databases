var models = require('../models');
var url = require('url');

var corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'content-type': 'application/JSON'


};

var stubbedMessages = [{username: 'BillyTheKidd', text: 'Yo there!', roomname: 'room1'}, 
{username: 'BillyTheKidd', text: 'Yo there!', roomname: 'room1'},
{username: 'Sergio', text: 'Heeeeyyy!', roomname: 'room3'},
{username: 'BillyTheKidd', text: 'Whats up man!', roomname: 'room1'},
{username: 'Silly', text: 'I am so lost!', roomname: 'room1'},
{username: 'Silly', text: 'Ahhhhhh', roomname: 'lobby'},
{username: 'Bobby', text: 'Laaa Dee Dah', roomname: 'lobby'},
{username: 'Susan', text: 'Doe, a deer', roomname: 'lobby'}];

module.exports = {
  messages: {
    options: function (req, res) {
      // console.log('CONTROLLER OPTIONS RAN');
      var status = 200;
      res.writeHead(status, corsHeaders);
      res.end();
    },

    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { console.log('ERROR', err); }
        if (results) { 
          // console.log('HANDLE THIS DATA', results); 
          res.writeHead(200, corsHeaders);
          res.end(JSON.stringify({results: results}));
        }
      });
      

    }, // a function which handles a get request for all messages


// // // MATCHES WHY NOT ON OTHER PAGE>
//     get: function (req, res) {
//       models.messages.get(req, res);
//       // console.log('CONTROLLER GET RAN');
//       // console.log('stubs = ', stubbedMessages[0]);
//       // var status = 200;
//       // res.writeHead(status, corsHeaders);
//       //res.end(JSON.stringify({results: stubbedMessages}));

//     }, // a function which handles a get request for all messages

///////////////////

    post: function (req, res) {
      var body = '';
      req.setEncoding = 'utf8';
      req.on('data', function(chunk) { body += chunk; });
      req.on('end', function () { 
        models.messages.post(JSON.parse(body));
        // console.log('BODY = ', body);
        // console.log('REQ.BODY = ', req.body);
       
        console.log('WHAT WE ARE RESPONDING WITH IN POST = ', JSON.parse(body));
        //stubbedMessages.push (JSON.parse(body));
        res.writeHead(201, corsHeaders);
        res.end(body); 
      });
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


module.exports.corsHeaders = corsHeaders;
