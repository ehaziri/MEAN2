angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/players', {
        templateUrl: "static/partials/players.html",
        controller: 'PlayersController'
      })
      .when('/teams', {
        templateUrl: "static/partials/teams.html",
        controller: 'TeamsController'
      })
      .when('/associations', {
        templateUrl: "static/partials/associations.html",
        controller: 'AssociationsController'
      })
      .otherwise('/')
  }])
