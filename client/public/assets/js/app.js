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

  angular.module('ambitio.directives').directive('slider', function() {
    var link;
    link = function(scope, $element, attrs) {
      var $slider;
      $slider = $element.find('.noUiSlider');
      console.log($element.find('.amount'));
      return $slider.noUiSlider({
        range: [0, 40],
        handles: 1,
        start: 0,
        serialization: {
          resolution: 1,
          to: $element.find('.amount')
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

/*
//@ sourceMappingURL=app.js.map
*/