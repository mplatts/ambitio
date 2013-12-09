(function() {
  'use strict';
  window.app = angular.module('ambitio', ['ngRoute', 'ngResource', 'ambitio.controllers']);

  angular.module('ambitio.controllers', []);

  app.config(function($routeProvider, $locationProvider) {
    var cwd;
    cwd = '../views';
    $routeProvider.when('/', {
      templateUrl: '#{cwd}/goals.html',
      controller: 'GoalsCtrl'
    }).when('/goals/:goal', {
      templateUrl: '#{cwd}/goal.html',
      controller: 'GoalCtrl'
    }).otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);

(function() {
  'use strict';
  angular.module('goalServices', ['ngResource']).factory('Goal', function($resource) {
    return $resource('/goals');
  });

}).call(this);

(function() {
  'use strict';
  angular.module('ambitio.controllers').controller('GoalCtrl', function($scope) {
    return console.log($scope.title);
  });

}).call(this);

(function() {
  'use strict';
  angular.module("ambitio.controllers").controller('GoalsCtrl', function($scope) {
    return $scope.goals = [
      {
        title: "Get fit",
        status: "incomplete",
        measures: [
          {
            title: "Dead lifts",
            current: 60,
            target: 100,
            measurement: "kg"
          }
        ]
      }, {
        title: "Eat healthy",
        status: "complete",
        measures: [
          {
            title: "No Gluten",
            current: 1,
            target: 30,
            measurement: "days"
          }
        ]
      }
    ];
  });

}).call(this);
