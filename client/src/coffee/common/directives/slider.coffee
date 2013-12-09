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
