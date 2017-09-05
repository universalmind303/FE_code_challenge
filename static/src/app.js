angular.module('myApp', ['Shapes','ShapeRenderer'])
  .controller('main', ($scope) =>{
    $scope.createShape = () => {
      if($scope.shape ==='Square') $scope.shapeList.push(new Square($scope.size))
      if($scope.shape ==='Circle') $scope.shapeList.push(new Circle($scope.size))
    }
  })


