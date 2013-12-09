'use strict'

# Create the app module
# It needs ngRoute for routing
# and ngResource for data modelling
window.app = angular.module('ambitio', [
  'ngRoute',
  'ngResource',
  'ambitio.controllers',
  'ambitio.directives'
])

angular.module('ambitio.controllers', [])
angular.module('ambitio.directives', [])

# Create routes
# Routes point to a controller and a base template
# .config can only take Providers as arguments
# It can't take instances
app.config ($routeProvider, $locationProvider) ->
  cwd = '../views'
  $routeProvider
    .when '/',
      templateUrl: "#{cwd}/goals.html"
      controller: 'GoalsCtrl'
    .when '/goals/:goal',
      templateUrl: "#{cwd}/goal.html"
      controller: 'GoalCtrl'
    .otherwise
      redirectTo: '/'

  #$locationProvider.html5Mode(true)
