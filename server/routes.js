var controller = require('./controllers/index.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.options('/messages', controller.messages.options); 

router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

