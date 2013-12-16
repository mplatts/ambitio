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
