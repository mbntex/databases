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
      console.log('hello OPTIONS');
      var status = 200;
      res.writeHead(status, corsHeaders);
      res.end();
    },

    get: function (req, res) {
      // console.log('hello GET');
      // console.log('stubs = ', stubbedMessages[0]);
      var status = 200;
      res.writeHead(status, corsHeaders);
      res.end(JSON.stringify({results: stubbedMessages}));

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = '';
      req.setEncoding = 'utf8';
      req.on('data', function(chunk) { body += chunk; });
      req.on('end', function () { 
        
        // console.log('BBBBODY = ', body);
        // console.log('REQ.BBBBODY = ', req.body);
        // var testItem = req.url;
        // console.log('TEST RESULT!!! = ', testItem);
        // console.log('TYPE OF TEST RESULT!!! = ', typeof testItem);


        console.log('WHAT WE ARE RESPONDING WITH IN POST = ', JSON.parse(body));
        stubbedMessages.push (JSON.parse(body));
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

