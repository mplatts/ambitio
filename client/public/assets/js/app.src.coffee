'use strict'

# Create the app module
# It needs ngRoute for routing
# and ngResource for data modelling
window.app = angular.module('ambitio', [
  'ngRoute',
  'ngResource',
  'ambitio.controllers',
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
  link = (scope, $element, attrs) ->
    console.log scope

  {
    templateUrl: 'views/templates/goal.html'
    restrict: 'E'
    link: link
  }

angular.module('ambitio.directives').directive('slider', ->
  link = (scope, $element, attrs) ->
    $slider = $element.find('.noUiSlider')
    $slider.noUiSlider({
      range: [0, scope.subgoal.target]
      handles: 1
      start: scope.subgoal.current
      scope: {
        subgoal: scope.subgoal
      }
      serialization:
        resolution: 1
        to: [
          (number) ->
            scope.subgoal.current = number
        ]
    })

  {
    templateUrl: 'views/templates/slider.html'
    restrict: 'E' # restrict to Element (defaults to A (Attribute)
    link: link
  }
)

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

angular.module('ambitio.controllers').controller 'GoalCtrl', ($scope) ->
  console.log $scope.title
  

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
