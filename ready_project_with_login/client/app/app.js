angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages'])
  .config(['$routeProvider', function($routeProvider) {
  	  $routeProvider
        .when('/', {
          templateUrl: 'partials/_index.html'
        })
  	  	// .when('/message', {
  	  	// 	templateUrl: 'partials/messages/_index.html',
  	  	// 	controller: 'messageController'
  	  	// })	
  	  	// .when('/ninjas/new', {
  	  	// 	templateUrl: 'partials/ninjas/_new.html',
  	  	// 	controller: 'ninjaController'
  	  	// })
      //   .when('/ninjas/:id', {
      //     templateUrl: 'partials/ninjas/_show.html',
      //     controller: 'ninjaController'
      //   })
  	  	// .when('/ninjas/:id/edit', {
  	  	// 	templateUrl: 'partials/ninjas/_edit.html',
  	  	// 	controller: 'ninjaController'
  	  	// })

      //   .when('/belts', {
      //     templateUrl: 'partials/belts/_index.html',
      //     controller: 'beltController'
      //   })
      //    .when('/belts/new', {
      //     templateUrl: 'partials/belts/_new.html',
      //     controller: 'beltController'
      //   })

  	  	.otherwise('/')

  }])