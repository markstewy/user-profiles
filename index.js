var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');

var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

var corsOptions = {
   origin: 'http://localhost:3000'
}
//middleware==========================

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}))
app.use(express.static(__dirname + '/public'));  //end all of our static front-end files from our server.

//===================================

app.post('/api/login', userCtrl.login);  //step 5: Express receives the post and acitivates the userCtrl.login
                                          //(no need to invoke with () because express takes care fo that (ie invoked when the
                                          //api call is made, not when this file is loaded))
                                          //GO TO: userCtrl.js in the controllers folder
                                       //step 7: passed back from userCtrl.js and sent up the chain to original http promise on firendService.js GO TO: friendService.js

app.get('/api/profiles', profileCtrl.getFriends); //step 12: Express receives the GET and acitivates the profileCtrl.getFriends
                                                   ////GO TO: profileCtrl.js in the controllers folder
                                                   //step 14: passed back from profileCtrl and sent up the chain to firendService.js
                                                   //GO TO: friendService.js
var port = 3000;
app.listen(port, function() {
   console.log('listening on port ', port);
})
