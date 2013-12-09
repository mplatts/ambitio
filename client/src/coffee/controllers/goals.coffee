'use strict'

angular.module("ambitio.controllers").controller 'GoalsCtrl', ($scope) ->
  $scope.goals = [
    {
      title: "Get fit"
      status: "incomplete"
      measures: [
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
      measures: [
        {
          title: "No Gluten"
          current: 1
          target: 30
          measurement: "days"
        }
      ]
    }
  ]
