angular.module('app', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider) {
  	  $routeProvider
        .when('/', {
          templateUrl: 'static/partials/_index.html'
        })
  	  	.when('/messages', {
  	  		templateUrl: 'static/partials/messages/_index.html',
  	  	})	

  	  	.otherwise('/')

  }])