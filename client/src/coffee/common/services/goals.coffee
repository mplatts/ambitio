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

