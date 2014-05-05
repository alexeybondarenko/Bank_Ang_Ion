
angular.module('Banking.controllers')

    .controller('PaymentsCtrl', function($scope, $location, Cards) {

        $scope.cards = Cards.all();
        $scope.payment = null;

        $scope.otp = new Array(4);
        $scope.verifyPayment =  function(payment) {
            $location.path('/tab/payment/verify');
            console.log('Processing payment: ',payment);
        }
        $scope.submitOtp = function(isValid) {

        }
    });