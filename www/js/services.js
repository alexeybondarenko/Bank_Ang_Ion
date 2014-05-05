angular.module('Banking.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Cards', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cards = [
    { id: 0, name: 'GoldCard', balance: "1125", currency: 'eur'},
    { id: 1, name: 'Deposit card', balance: "10000", currency: "usd"}
  ];

  return {
    all: function() {
      return cards;
    },
    get: function(cardID) {
      // Simple index lookup
      return cards[cardID];
    }
  }
})

.factory('Transactions', function(Transaction) {
    // Might use a resource here that returns a JSON array

    // Transactions
    var transactions = [
        new Transaction({
            "id": 0,
            "cardID": 1,
            "balance": "-$427.63",
            "name": "Intradisk 670 Dekalb Avenue, Torboy, Colorado, 3361",
            "timestamp": "2014-03-29T23:03:20-02:00"
        }),
        new Transaction({
            "id": 1,
            "cardID": 1,
            "balance": "-$206.82",
            "name": "Kraggle 827 Richards Street, Longbranch, New Hampshire, 9760",
            "timestamp": "2014-03-12T19:51:25-02:00"
        }),
        new Transaction({
            "id": 2,
            "cardID": 0,
            "balance": "$517.34",
            "name": "Portico 446 Hanover Place, Tuttle, Nevada, 5304",
            "timestamp": "2014-03-14T05:05:03-02:00"
        }),
        new Transaction({
            "id": 3,
            "cardID": 1,
            "balance": "$233.23",
            "name": "Xerex 579 Gerry Street, Coinjock, Kansas, 3539",
            "timestamp": "2014-02-09T02:49:44-02:00"
        }),
        new Transaction({
            "id": 4,
            "cardID": 1,
            "balance": "-$981.47",
            "name": "Orbaxter 463 Wakeman Place, Juarez, Ohio, 3487",
            "timestamp": "2014-04-24T04:46:51-03:00"
        }),
        new Transaction({
            "id": 5,
            "cardID": 1,
            "balance": "-$220.35",
            "name": "Cosmetex 537 Gold Street, Wildwood, Indiana, 9784",
            "timestamp": "2014-03-07T14:26:39-02:00"
        }),
        new Transaction({
            "id": 6,
            "cardID": 1,
            "balance": "-$194.38",
            "name": "Bedder 699 Clarkson Avenue, Fresno, Oregon, 7547",
            "timestamp": "2014-04-12T07:07:32-03:00"
        }),
        new Transaction({
            "id": 7,
            "cardID": 0,
            "balance": "-$745.95",
            "name": "Ewaves 356 Neptune Avenue, Cascades, Iowa, 3710",
            "timestamp": "2014-02-26T09:02:06-02:00"
        }),
        new Transaction({
            "id": 8,
            "cardID": 0,
            "balance": "-$261.48",
            "name": "Magnina 128 Locust Avenue, Makena, Georgia, 8861",
            "timestamp": "2014-01-01T05:36:06-02:00"
        }),
        new Transaction({
            "id": 9,
            "cardID": 1,
            "balance": "$775.11",
            "name": "Isoplex 512 Dwight Street, Allensworth, Montana, 8581",
            "timestamp": "2014-04-25T21:33:49-03:00"
        }),
        new Transaction({
            "id": 10,
            "cardID": 0,
            "balance": "-$3.51",
            "name": "Prosely 606 Dahl Court, Loveland, Minnesota, 4199",
            "timestamp": "2014-01-14T11:02:29-02:00"
        })
    ];

    return {
        all: function() {
            return transactions;
        },
        last: function(count, cardID) {
            var length = transactions.length,
                arr = transactions;
            if(cardID != undefined) {
                arr = this.get(cardID);
            }
            return arr.slice(-1*count);
        },
        get: function(cardID, limit, offset) {
            // Simple index lookup
            var arr;
            if (cardID != undefined) {
                arr = transactions.filter(function(transaction) {
                    return transaction.cardID == cardID;
                });
            }
            if (limit != undefined && offset != undefined) {
                arr.slice(-1* limit, -1* offset);
            }

            return arr;
        }
    }
});
