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
