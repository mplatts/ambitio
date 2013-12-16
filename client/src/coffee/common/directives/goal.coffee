angular.module('ambitio.directives').directive 'goal', ->
  {
    templateUrl: 'views/templates/goal.html'
    restrict: 'E'
    require: 'ngModel'
    scope:
      goal: '=ngModel'
  }
