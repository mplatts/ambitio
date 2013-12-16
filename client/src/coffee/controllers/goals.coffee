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
          records: [
          ]
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
          id: 1
          title: "Dead lifts"
          current: 60
          target: 100
          measurement: "kg"
          records: [
            { created_at: new Date(), value: 60 }
            { created_at: new Date(), value: 63 }
            { created_at: new Date(), value: 64 }
            { created_at: new Date(), value: 67 }
            { created_at: new Date(), value: 63 }
            { created_at: new Date(), value: 80 }
          ]
        }
      ]
    },
    {
      title: "Eat healthy"
      status: "complete"
      subgoals: [
        {
          id: 2
          title: "No Gluten"
          current: 9
          target: 30
          measurement: "days"
          records: [
            { created_at: new Date(), value: 9 }
            { created_at: new Date(), value: 10 }
            { created_at: new Date(), value: 11 }
            { created_at: new Date(), value: 12 }
            { created_at: new Date(), value: 13 }
            { created_at: new Date(), value: 14 }
          ]
        }
      ]
    }
  ]
