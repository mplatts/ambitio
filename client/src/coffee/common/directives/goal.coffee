angular.module('ambitio.directives').directive 'goal', ->
  link = (scope, $element, attrs) ->
    console.log scope

  {
    templateUrl: 'views/templates/goal.html'
    restrict: 'E'
    link: link
  }
