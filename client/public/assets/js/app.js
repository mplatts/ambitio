(function() {
  'use strict';
  window.app = angular.module('ambitio', ['ngRoute', 'ngTouch', 'ngResource', 'ambitio.controllers', 'ambitio.directives']);

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
    return {
      templateUrl: 'views/templates/goal.html',
      restrict: 'E',
      require: 'ngModel',
      scope: {
        goal: '=ngModel'
      }
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
        serialization: {
          resolution: 1,
          to: $element.find('input.amount')
        }
      }).change(function() {
        return scope.$apply(function() {
          return scope.subgoal.current = $slider.val();
        });
      });
    };
    return {
      templateUrl: 'views/templates/slider.html',
      restrict: 'E',
      link: link,
      controller: function($scope) {
        return console.log('slider', $scope);
      }
    };
  });

  angular.module('ambitio.directives').directive('sparkline', function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {
        subgoal: '=ngModel'
      },
      link: function(scope, $element, attributes) {
        var update;
        update = function() {
          var record, values, _i, _len, _ref;
          values = [];
          _ref = scope.subgoal.records;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            record = _ref[_i];
            values.push(record.value);
          }
          scope.graph_points = values.join();
          $element.text(scope.graph_points);
          return $element.peity("line");
        };
        update();
        return scope.$watch('subgoal', (function() {
          console.log('record change');
          console.log(scope.subgoal.records.length);
          update();
          return $element.change();
        }), true);
      }
    };
  });

  angular.module('ambitio.directives').directive('subgoal', function() {
    return {
      templateUrl: 'views/templates/subgoal.html',
      restrict: 'E',
      require: 'ngModel',
      scope: {
        subgoal: '=ngModel'
      },
      controller: function($scope) {
        console.log($scope);
        window.sc = $scope;
        return $scope.save = function() {
          var record;
          record = {
            value: parseInt($scope.subgoal.current),
            created_at: new Date()
          };
          return $scope.subgoal.records.push(record);
        };
      }
    };
  });

  'use strict';

  angular.module('goalServices', ['ngResource']).factory('Goal', function($resource) {
    return $resource('/goals');
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
            records: [],
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
            id: 1,
            title: "Dead lifts",
            current: 60,
            target: 100,
            measurement: "kg",
            records: [
              {
                created_at: new Date(),
                value: 60
              }, {
                created_at: new Date(),
                value: 63
              }, {
                created_at: new Date(),
                value: 64
              }, {
                created_at: new Date(),
                value: 67
              }, {
                created_at: new Date(),
                value: 63
              }, {
                created_at: new Date(),
                value: 80
              }
            ]
          }
        ]
      }, {
        title: "Eat healthy",
        status: "complete",
        subgoals: [
          {
            id: 2,
            title: "No Gluten",
            current: 9,
            target: 30,
            measurement: "days",
            records: [
              {
                created_at: new Date(),
                value: 9
              }, {
                created_at: new Date(),
                value: 10
              }, {
                created_at: new Date(),
                value: 11
              }, {
                created_at: new Date(),
                value: 12
              }, {
                created_at: new Date(),
                value: 13
              }, {
                created_at: new Date(),
                value: 14
              }
            ]
          }
        ]
      }
    ];
  });

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/