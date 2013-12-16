'use strict'

# Create the app module
# It needs ngRoute for routing
# and ngResource for data modelling
window.app = angular.module('ambitio', [
  'ngRoute'
  'ngTouch'
  'ngResource'
  'ambitio.controllers'
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

angular.module('ambitio.directives').directive 'editable', ->
  {
    restrict: 'A' # restrict to attribute
    replace: true # replace element with the 'editable' attribute
    templateUrl: 'views/templates/editable.html'
    scope:
      editable: '=editable' # editable='subgroup.title'
    controller: ($scope) ->
      $scope.view = {
        editing: false
        editable: $scope.editable
      }

      $scope.startEditing = ->
        $scope.editing = true

      $scope.stopEditing = ->
        $scope.editing = false
        $scope.editable = $scope.view.editable

      $scope.keyPress = (event) ->
        if event.keyCode == 13
          $scope.stopEditing()
  }

angular.module('ambitio.directives').directive 'goal', ->
  {
    templateUrl: 'views/templates/goal.html'
    restrict: 'E'
    require: 'ngModel'
    scope:
      goal: '=ngModel'
  }

angular.module('ambitio.directives').directive('slider', ->
  link = (scope, $element, attrs) ->
    $slider = $element.find('.noUiSlider')
    $slider.noUiSlider({
      range: [0, scope.subgoal.target]
      handles: 1
      start: scope.subgoal.current
      serialization:
        resolution: 1
        to: $element.find('input.amount')
    }).change ->
      scope.$apply ->
        scope.subgoal.current = $slider.val()

  {
    templateUrl: 'views/templates/slider.html'
    restrict: 'E' # restrict to Element (defaults to A (Attribute)
    link: link
    controller: ($scope) ->
      console.log 'slider', $scope
  }
)

angular.module('ambitio.directives').directive 'sparkline', ->
  {
    restrict: 'E'
    require: 'ngModel'
    scope:
      subgoal: '=ngModel'
    link: (scope, $element, attributes) ->
      update = ->
        values = []

        for record in scope.subgoal.records
          values.push(record.value)

        scope.graph_points = values.join()
        $element.text scope.graph_points
        $element.peity("line")

      update()

      scope.$watch 'subgoal', (->
        console.log 'record change'
        console.log scope.subgoal.records.length
        update()
        $element.change()
      ), true
  }

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

'use strict'

# Factory creates an angular obj that can be used anywhere
# ngResource gives you $resource, which allows you to interact
# with RESTful server-side data sources
#
# We need to include 'goalServices' as a dependency in app
#
# Now in a controller we can include this factory as a dependency:
# app.controller('ctrl', ($scope, Goal) ->
#   $scope.goals = Goal.query() # GET /goals
angular.module('goalServices', ['ngResource']).factory('Goal', ($resource) ->
  $resource('/goals')
)


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
