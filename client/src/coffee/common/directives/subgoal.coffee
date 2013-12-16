angular.module('ambitio.directives').directive 'subgoal', ->
  {
    templateUrl: 'views/templates/subgoal.html'
    restrict: 'E'
    require: 'ngModel'
    scope:
      subgoal: '=ngModel'
    controller: ($scope) ->
      console.log $scope
      window.sc = $scope
      $scope.save = ->
        record = {
          value: parseInt($scope.subgoal.current)
          created_at: new Date()
        }
        $scope.subgoal.records.push(record)
  }
