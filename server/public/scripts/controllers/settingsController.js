colorBlocks.controller('SettingsController', ['$scope', 'DataFactory' , function($scope, DataFactory) {
  console.log("settings controller running");

  $scope.formColor = '';
  $scope.colors = $scope.datafactory.colors;
  $scope.datafactory = DataFactory;

  $scope.addColor = function(){
    $scope.datafactory.addColor($scope.formColor);
    $scope.formColor = '';
  }

  // $scope.removeColor = function(clickedColor){
  //     console.log('added color: ' , clickedcolor);
  //   $scope.datafactory.removeColor($scope.clickedColor);
  // }

}]);
