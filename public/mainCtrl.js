angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		//step 3: the argument user is passed to the method on the service (also called login) GO TO: friendService.js
		friendService.login(user).then(function( response ) {
			if (response.data.userFound) {	//step 9: if userfound is true, change the location path in the router to profiles
				$location.path('/profile');	//GO TO: app.js
			} else {
				alert('user not found');
			}
		});
	}

});
