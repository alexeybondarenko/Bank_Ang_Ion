
angular.module("Banking.models", [])

.factory('Transaction', ['$http', function($http) {
    function Transaction(data) {
        if (data) {
            this.setData(data);
        }
    }
    Transaction.prototype = {
        setData: function(data) {
            angular.extend(this, data);
        },
        formatedDate: function() {
            return new Date(this.timestamp || 0);
        }
    };
    return Transaction;
}]);
