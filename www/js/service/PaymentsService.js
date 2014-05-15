angular.module('Banking.services')
.factory('PaymentsService',['$rootScope', 'localStorageService', function($rootScope,localStorageService) {
        var service = {
            /**
             * Key of the saved payments ath the local storage
             */
            storageKey: 'payments',
            /**
             * Current payment object
             */
            payment: {},
            /**
             * Is payment a template
             */
            isTemplate: false,
            /**
             * Loading all saved payments template
             * @returns {Array}
             */
            all: function () {
                var savedPayments = localStorageService.get(service.storageKey);
                if (savedPayments == null || (typeof savedPayments != 'object' && typeof savedPayments != 'array')) savedPayments = [];
                return savedPayments;
            },
            /**
             * Setting value for current payment
             * @param data
             */
            set: function (data) {
                //Setting obj for the current payment
                service.payment = data;
            },
            /**
             * Get current payment object
             * @returns {Object} Payment object
             */
            get: function () {
                return service.payment;
            },
            /**
             * Reset payment object
             */
            reset: function() {
                service.payment = {};
                service.isTemplate = false;
            },
            /**
             * Clear storage. Removing all the saved templates
             * @return {Array} Array of removed templates
             */
            removeAll: function() {
                var removed = localStorageService.get(service.storageKey);
                localStorageService.set(service.storageKey,null);
                return removed;
            },
            /**
             * Save current payment as template at the storage
             */
            save: function() {
                var title = prompt("Enter name for the template");
                if(!title) return false; //Saved failed

                var savedPayments = service.all();
                var payment = service.get();
                payment.name = title;
                savedPayments.push(payment);


                localStorageService.set(service.storageKey,savedPayments);
                console.log('Saved payments ', service.all());

                return true; //Saved successful
            },
            /**
             * Loading payment from template
             * @param payment
             */
            load: function(payment) {
                service.set(payment);
                service.isTemplate = true;
            }
        };


    return service;

}]);