angular.module("Banking.models", [])

.factory('Card', ['$http','$filter', function($http, $filter) {
    function Model(data) {
        var obj = new CardModel (data.id, data.ownerID, data.timestamp, data.name, data.number, data.balance, data.currency, data.type);
        obj.currencySymbol = $filter('currencySymbol')(obj.currency.toUpperCase());
        return obj;
    }
    return Model;
}])
.factory('Transaction', ['$http', function($http) {
    function Transaction(data) {
        if (data) {
            this.setData(data);
            this.typeIcon = this.getTypeIcon();
        }
    }
    Transaction.prototype = {
        setData: function(data) {
            angular.extend(this, data);
        },
        formatedDate: function() {
            return new Date(this.timestamp || 0);
        },
        getTypeIcon: function() {
//            <i class="icon ion-ios7-gear"></i>
//            <i class="icon ion-beer"></i>
//            <i class="icon ion-bag"></i>
//            <i class="icon ion-card"></i>
//            <i class="icon ion-calculator"></i>
//            <i class="icon ion-ios7-lightbulb-outline"></i>
            var arrIcons = ['ion-ios7-gear','ion-beer', 'ion-bag', 'ion-card', 'ion-calculator', 'ion-lightbulb'];
            var randomIdx = Math.floor(Math.random()*arrIcons.length);

            return arrIcons[randomIdx];
        }
    };

    return Transaction;
}]);