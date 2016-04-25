angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
        return $http({
           method: 'POST',
           url: '/api/login',
           data: user
           })
           //step 4: the login function on the service is a $http promise, it will pass the user object in "data: user" to
          // the server file (named index.js). It know's this is a POST on the '/api/login' url.
          // GO TO: index.js app.post('/api/login', etc....)
          //step 8: res.send({userFound: true}) received from server (index.js)
          //passed up the chain to mainCtrl GO TO: mainCtrl.js
    },

    getFriends: function() {
        return $http({           //step 11: the function sends another http promise to the server
           method: 'GET',        // GO TO: index.js app.get('/api/profiles',etc...
           url: 'api/profiles'   //step 15: nameless object passed up the chain from server that includes session
        })                      //key with user info and friends profiles. passed on to app.js route resolve GO TO: app.js
    }
  }
});
