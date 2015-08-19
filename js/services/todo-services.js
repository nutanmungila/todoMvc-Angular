var app = angular.module("todoMvcApp");

app.factory("todoServices", [function() {
  var todoServices = {
    data: {
      todos: []
    }
  }
  return todoServices;
}]);
