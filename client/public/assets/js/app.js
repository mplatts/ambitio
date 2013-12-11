(function() {
  'use strict';
  window.app = angular.module('ambitio', ['ngRoute', 'ngResource', 'ambitio.controllers', 'ambitio.directives']);

  angular.module('ambitio.controllers', []);

  angular.module('ambitio.directives', []);

  app.config(function($routeProvider, $locationProvider) {
    var cwd;
    cwd = '../views';
    return $routeProvider.when('/', {
      templateUrl: "" + cwd + "/goals.html",
      controller: 'GoalsCtrl'
    }).when('/goals/:goal', {
      templateUrl: "" + cwd + "/goal.html",
      controller: 'GoalCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

  angular.module('ambitio.directives').directive('editable', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'views/templates/editable.html',
      scope: {
        editable: '=editable'
      },
      controller: function($scope) {
        $scope.view = {
          editing: false,
          editable: $scope.editable
        };
        $scope.startEditing = function() {
          return $scope.editing = true;
        };
        $scope.stopEditing = function() {
          $scope.editing = false;
          return $scope.editable = $scope.view.editable;
        };
        return $scope.keyPress = function(event) {
          if (event.keyCode === 13) {
            return $scope.stopEditing();
          }
        };
      }
    };
  });

  angular.module('ambitio.directives').directive('goal', function() {
    var link;
    link = function(scope, $element, attrs) {
      return console.log(scope);
    };
    return {
      templateUrl: 'views/templates/goal.html',
      restrict: 'E',
      link: link
    };
  });

  angular.module('ambitio.directives').directive('slider', function() {
    var link;
    link = function(scope, $element, attrs) {
      var $slider;
      $slider = $element.find('.noUiSlider');
      return $slider.noUiSlider({
        range: [0, scope.subgoal.target],
        handles: 1,
        start: scope.subgoal.current,
        scope: {
          subgoal: scope.subgoal
        },
        serialization: {
          resolution: 1,
          to: [
            function(number) {
              return scope.subgoal.current = number;
            }
          ]
        }
      });
    };
    return {
      templateUrl: 'views/templates/slider.html',
      restrict: 'E',
      link: link
    };
  });

  'use strict';

  angular.module('goalServices', ['ngResource']).factory('Goal', function($resource) {
    return $resource('/goals');
  });

  'use strict';

  angular.module('ambitio.controllers').controller('GoalCtrl', function($scope) {
    return console.log($scope.title);
  });

  'use strict';

  angular.module("ambitio.controllers").controller('GoalsCtrl', function($scope) {
    $scope.createGoal = function() {
      return $scope.goals.push({
        title: "Goal " + ($scope.goals.length + 1),
        status: "incomplete",
        subgoals: [
          {
            title: "Subgoal 1",
            current: 0,
            target: 10,
            measurement: "kg"
          }
        ]
      });
    };
    return $scope.goals = [
      {
        title: "Get fit",
        status: "incomplete",
        subgoals: [
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
        subgoals: [
          {
            title: "No Gluten",
            current: 9,
            target: 30,
            measurement: "days"
          }
        ]
      }
    ];
  });

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/