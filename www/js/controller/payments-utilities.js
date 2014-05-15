angular.module('Banking.controllers')
    .controller('PaymentsCtrl', function($scope, $location, Cards, PaymentsService) {

        $scope.cards = Cards.all();
        $scope.payment = PaymentsService.get();
        if ($scope.payment.paymentCard == undefined) $scope.payment.paymentCard = $scope.cards[0];

        $scope.otp = [];

        $scope.templates = PaymentsService.all();
        $scope.isTemplate = PaymentsService.isTemplate;

        $scope.url = $location.path();

        $scope.load = function(payment) {
            PaymentsService.load(payment);
        };

        $scope.verifyPayment =  function(payment) {
            $scope.savePayment();

            // Saving current template path
            $scope.payment.path = $location.path();

            $location.path('/tab/payment/verify');
            console.log('Processing payment: ',payment);
        };
        $scope.submitOtp = function(isValid) {
            if(!isValid) { return false; }
            $scope.savePayment();

            $location.path('/tab/payment/success');
            console.log("Submit otp: ", $scope.otp, isValid);
        };
        $scope.addFavorite = function() {
            $scope.isTemplate = PaymentsService.save();
        };
        $scope.savePayment = function() {
            PaymentsService.set($scope.payment);
        };
        $scope.reset = function() {
            PaymentsService.reset();
        };

//        if ($scope.url == '/tab/payments') {
//            $scope.reset();
//        }
    });