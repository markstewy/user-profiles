angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {									//step 10: before loading the profile page, resolve the userInfo
			userInfo: function( friendService ) {		//the friendService is injected so the getFriends function can be called
				return friendService.getFriends();		// GO TO: friendService.js (notice the function is invoked here)
			}												//step 16: now the profile template can load because the profileCtrl has acces to the data
		}													// passed up (and now located on the resolve object userInfo)
	});

	$urlRouterProvider.otherwise('/');

});
