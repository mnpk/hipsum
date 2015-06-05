var hipsum = angular.module('hipsum', []);

function main_controller($scope, $http) {
  $scope.query = {
    p: 2,
    l: 50,
    c: 0
  };

  $scope.getLorem = function(valid) {
    if (!valid) return;
    var url = '/api/lorem?p=' + $scope.query.p + '&l=' + $scope.query.l + '&c=' + $scope.query.c;
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

  $scope.getLorem(true);
}
