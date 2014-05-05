var app = angular.module('Banking', ['ionic', 'Banking.models', 'Banking.controllers', 'Banking.services', 'ui.utils'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })
    .state('tab.cards', {
        url: '/cards',
        views: {
            'tab-cards':  {
                templateUrl: 'templates/tab-cards.html',
                controller: 'CardsCtrl'
            }
        }
    })
    .state('tab.card-detail', {
        url: '/card/:cardID',
        views: {
            'tab-cards': {
                templateUrl: 'templates/card-detail.html',
                controller: 'CardDetailCtrl'
            }
        }
    })
    // Each tab has its own nav history stack:

    .state('tab.payments', {
        url: '/payments',
        views: {
            'tab-payments': {
                templateUrl: 'templates/tab-payments.html',
                controller: 'PaymentsCtrl'
            }
        }
    })
    .state('tab.payment-verify', {
        url: '/payment/verify',
        views: {
            'tab-payments': {
                templateUrl: 'templates/payments/payment-verify.html',
                controller: 'PaymentsCtrl'
            }
        }
    })
    .state('tab.payment-mobile', {
        url: '/payment/mobile',
        views: {
            'tab-payments': {
                templateUrl: 'templates/payments/payment-mobile.html',
                controller: 'PaymentsCtrl'
            }
        }
    })
    .state('tab.locations', {
        url: '/locations',
        views: {
            'tab-locations': {
                templateUrl: 'templates/tab-locations.html',
                controller: 'LocationsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/cards');

});

