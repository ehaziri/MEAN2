angular.module('app', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider) {
  	  $routeProvider
        .when('/', {
          templateUrl: 'partials/_index.html'
        })
  	  	.when('/dashboard', {
  	  		templateUrl: 'partials/polls/_dashboard.html',
  	  		controller: 'dashboardController'
  	  	})	
  	  	.when('/create', {
  	  		templateUrl: 'partials/polls/_new.html',
  	  		controller: 'pollController'
  	  	})
        .when('/poll/:id', {
          templateUrl: 'partials/polls/_show.html',
          controller: 'pollController'
        })
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