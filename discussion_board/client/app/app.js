angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages'])
  .config(['$routeProvider', function($routeProvider) {
  	  $routeProvider
        .when('/', {
          templateUrl: 'partials/_index.html',
          controller: 'mainController'
        })
  	  	.when('/dashboard', {
  	  		templateUrl: 'partials/discussions/_index.html',
  	  		controller: 'dashboardController'
  	  	})	
  	  	.when('/topic/:id', {
  	  		templateUrl: 'partials/discussions/_show.html',
  	  		controller: 'showController'
  	  	})
        .when('/user/:id', {
          templateUrl: 'partials/discussions/_user.html',
          controller: 'userController'
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