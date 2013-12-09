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

angular.module('ambitio.directives').directive('slider', ->
  link = (scope, $element, attrs) ->
    $slider = $element.find('.noUiSlider')
    console.log $element.find('.amount')
    $slider.noUiSlider({
      range: [0,40]
      handles: 1
      start: 0
      serialization:
        resolution: 1
        to: $element.find('.amount')
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
