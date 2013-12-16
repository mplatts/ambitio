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
