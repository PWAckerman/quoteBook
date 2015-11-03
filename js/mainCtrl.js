app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService){
  $scope.quotes = dataService.getData();
  $scope.add = {};
  $scope.add.text = '';
  $scope.add.author = '';
  $scope.addQb = function(){
    $scope.show = [true,false,false];
  }
  $scope.removeQb = function(){
    $scope.show = [false,true,false];
  }
  $scope.filterQb = function(){
    $scope.show = [false,false,true];
  }
  $scope.show = [true,false,false];
  $scope.returnNew = function(){
    console.log($scope.remove);
  }
  $scope.addData = function(){
      var obj = {};
      for(var prop in $scope.add){
        obj[prop] = $scope.add[prop];
      }
      dataService.addData(obj);
      $scope.add.text = '';
      $scope.add.author = '';};
  $scope.removeQuote = function(){
      var text = $scope.remove;
      dataService.removeData(text);
      $scope.remove = '';
  };
  $scope.applySearchFilter = function() {
    console.log('filtered!')
    $scope.searchTerm = $scope.filterThis;
  };
}])
