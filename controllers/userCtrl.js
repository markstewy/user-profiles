// userCtrl.js
var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
   login: function(req, res, next) {                  //step 6: this function does 3 things-
      var userFound = false;                          //     1) it tests to see if the user object has the correct name and pswrd
      for(var i = 0; i < users.length; i++) {         //     2) it assigns req.session.currentUser (adds the user to a session id object !!see below!!)
         if(users[i].name ===  req.body.userName && users[i].password === req.body.password) {  //3) it returns userFound with a true property once matched usrnm and pswrd
               console.log("successful login!")                      //GO TO: index.js
               req.session.currentUser = users[i]; //this is included in an express header, that's why we have acces in profileCtrl.js
               console.log(req.session.currentUser);
               return res.send({userFound: true});  //return needed to break the loop
            }
         }
         console.log("incorrect password")
         return res.send({userFound: false});  //return needed to break the loop
      }
   }
//
//the sesion id is adding the current user as an object, it might look something like this??:
// {
//    session.currentUser: "as;ldkfja;sldkjfa;lsdkjf",
//    {
//       name: 'Preston McNeil',
//       password: 'password1',
//       friends: ['Lindsey Mayer', 'Terri Ruff']
//    }
// }
//
//
//
//
//
