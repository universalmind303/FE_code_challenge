var myApp = angular.module('myApp', ['Shapes',])
  .controller('main', ($scope, ) =>{
    $scope.shapeSize = 0
    // $scope.shapeList = ShapeGenerator()
    $scope.createShape = () => {
      if($scope.shape ==='Square') $scope.shapeList.push(new Square($scope.size))
      if($scope.shape ==='Circle') $scope.shapeList.push(new Circle($scope.size))
    }
  })


