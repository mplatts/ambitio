'use strict'

angular.module("ambitio.controllers").controller 'GoalsCtrl', ($scope) ->
  $scope.createGoal = ->
    $scope.goals.push({
      title: "Goal #{$scope.goals.length + 1}"
      status: "incomplete"
      subgoals: [
        {
          title: "Subgoal 1"
          current: 0
          target: 10
          measurement: "kg"
        }
      ]
    })

  $scope.goals = [
    {
      title: "Get fit"
      status: "incomplete"
      subgoals: [
        {
          title: "Dead lifts"
          current: 60
          target: 100
          measurement: "kg"
        }
      ]
    },
    {
      title: "Eat healthy"
      status: "complete"
      subgoals: [
        {
          title: "No Gluten"
          current: 9
          target: 30
          measurement: "days"
        }
      ]
    }
  ]
