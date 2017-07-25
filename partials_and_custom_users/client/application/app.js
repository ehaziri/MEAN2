angular.module('app', ['ngRoute'])
 .config(['$routeProvider', function($routeProvider) {
 	 $routeProvider
      .when('/users', {
         templateUrl: 'static/partials/customizeUsers.html',
         controller: 'CustomizeUsersController'
      })
      .when('/list', {
         templateUrl: 'static/partials/userList.html',
         controller: 'UsersListController'
      })
      .otherwise({
         redirectTo: '/users'
      });
 }
 ])
