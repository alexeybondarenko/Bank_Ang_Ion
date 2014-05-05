angular.module('Banking.controllers',[])

.controller('CardsCtrl', function($scope, $timeout, Cards) {
  $scope.cards = Cards.all();
  $scope.refresh = function() {
      $timeout( function() {
        //Stop refreshing
        $scope.$broadcast('scroll.refreshComplete');
      },2000);
  };

})

.controller('CardDetailCtrl', function($scope, $stateParams,   Cards, Transactions) {
  $scope.card = Cards.get($stateParams.cardID);
  $scope.transactions = Transactions.get($stateParams.cardID);
})

.controller('LocationsCtrl', function($scope) {
});
