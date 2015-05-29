var hipsum = angular.module('hipsum', []);

function main_controller($scope, $http) {
  $scope.query = {
    p: 3,
    l: 40
  };

  $scope.getLorem = function() {
    var url = '/lorem.json?p=' + $scope.query.p + '&l=' + $scope.query.l
    console.log(url)
    $http.get(url)
    .success(function(data) {
      $scope.lorem = data.result;
      console.log(data)
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $scope.getLorem();
}
