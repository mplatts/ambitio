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
