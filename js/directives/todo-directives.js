var app = angular.module("todoMvcApp");

app.directive("todoMvc", [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/todo-mvc.html',
    controller: ["$scope", function($scope) {

    }]
  }
}]);

app.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

app.directive("inputTodo", [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/input-todo.html',
    controller: ["$scope", "todoServices", function($scope, todoServices) {
      $scope.onEnter = function() {

        $scope.inputServiceData = todoServices.data;
        $scope.inputServiceData.todos.push({
          "todo": $scope.todo,
          "done": false
        });
        console.log("input", $scope.inputServiceData.todos);
        $scope.todo = "";
      }
    }]
  }

}]);

app.directive("displayTodos", [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/display-todos.html',
    controller: ["$scope", "todoServices", function($scope, todoServices) {
      $scope.displayServiceData = todoServices.data;
      $scope.undoneClicked = false;
      $scope.onClickTodoDelete = function(item) {
        $scope.index = $scope.displayServiceData.todos.indexOf(item);
        if ($scope.index > -1) {
          $scope.displayServiceData.todos.splice($scope.index, 1);
        }
      }

      $scope.onClickTodo = function(item) {
        item.done = "true";
      }

      $scope.onClickUndone = function() {
        $scope.undoneClicked = true;
      }

      $scope.onClickAll = function() {
        $scope.undoneClicked = false;
      }

      console.log("display", $scope.doneTodo);
    }]
  }
}]);
