angular.module('Banking.controllers',['google-maps',"highcharts-ng"])

.controller('CardsCtrl', function($scope, $timeout, Cards, $window, $location) {
    $scope.cards = Cards.all();

    $scope.refresh = function() {
      $timeout( function() {
        //Stop refreshing
          $window.location.reload();
          $scope.$broadcast('scroll.refreshComplete');
      },1000);
    };

    $scope.chartSeries = {
        categories: ['23/04','24/04','25/04','26/04','27/04','28/04','29/04','30/04','1/05'],
        earningAndCost: [
            {"name": "Costs", "data": [10,20,10,30,100, 10, 202, 103, 10]},
            {"name": "Earnings", "data": [10, 20, 100, 210, 10,100,20,120,102]}
        ],
        balance: [
            {"name": "Balance", "data": [1000,1200,900,700,1800, 3000, 2400, 2250, 2400]}
        ]
    };
    $scope.chartConfig = {
        earningAndCost: {
            options: {
                chart: {
                    type: 'column'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{series.color};">{point.y:.1f}</span>',
                    footerFormat: '',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        groupPadding:.05,
                        pointPadding: 0,
                        borderWidth: 0
                    }
                },
                legend: {
                    enabled: false
                }
            },
            series: $scope.chartSeries.earningAndCost,
            size: {
                height:140
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Earning & Costs',
                align: 'left'

            },
            xAxis: {
                labels: {
                    enabled: true
                },
                title: {
                    enabled: false
                },
                lineColor: '#CBCBCB',
                tickWidth: 0,
                categories: $scope.chartSeries.categories,
                type: 'category'
            },
            yAxis: {
                endOnTick: false,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                startOnTick: false,
                minPadding: 0.5,
                title: {
                    text: ""
                }
            }
        },
        balance: {
            options: {
                chart: {
                    type: 'line'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{series.color};">{point.y:.1f}</span>',
                    footerFormat: '',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        groupPadding:.05,
                        pointPadding: 0,
                        borderWidth: 0
                    }
                },
                legend: {
                    enabled: false
                }
            },
            series: $scope.chartSeries.balance,
            size: {
                height:140
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Balance',
                align: 'left'

            },
            xAxis: {
                labels: {
                    enabled: true
                },
                title: {
                    enabled: false
                },
                lineColor: '#CBCBCB',
                tickWidth: 0,
                categories: $scope.chartSeries.categories,
                type: 'category'
            },
            yAxis: {
                endOnTick: false,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                startOnTick: false,
                minPadding: 0.5,
                title: {
                    text: ""
                }
            }
        }
    };

})

.controller('CardDetailCtrl', ['$scope', '$stateParams', '$timeout','$ionicModal', '$ionicScrollDelegate', 'Cards', 'Transactions','Transaction',function($scope, $stateParams,  $timeout, $ionicModal,$ionicScrollDelegate, Cards, Transactions,Transaction) {
    $scope.transactions = Transactions.get($stateParams.cardID);
    $scope.card = Cards.get($stateParams.cardID);

    $scope.chartSeries = {
        categories: ['23/04','24/04','25/04','26/04','27/04','28/04','29/04','30/04','1/05'],
        earningAndCost: [
            {"name": "Costs", "data": [10,20,10,30,100, 10, 202, 103, 10]},
            {"name": "Earnings", "data": [10, 20, 100, 210, 10,100,20,120,102]}
        ],
        balance: [
            {"name": "Balance", "data": [1000,1200,900,700,1800, 1000, 2400, 2250, 2400]}
        ]
    };
    $scope.chartConfig = {
        earningAndCost: {
            options: {
                chart: {
                    type: 'column'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{series.color};">{point.y:.1f}</span>',
                    footerFormat: '',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        groupPadding:.05,
                        pointPadding: 0,
                        borderWidth: 0
                    }
                },
                legend: {
                    enabled: false
                }
            },
            series: $scope.chartSeries.earningAndCost,
            size: {
                height:120
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Earning & Costs',
                align: 'left'

            },
            xAxis: {
                labels: {
                    enabled: true
                },
                title: {
                    enabled: false
                },
                lineColor: '#CBCBCB',
                tickWidth: 0,
                categories: $scope.chartSeries.categories,
                type: 'category'
            },
            yAxis: {
                endOnTick: false,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                startOnTick: false,
                minPadding: 0.5,
                title: {
                    text: ""
                }
            }
        },
        balance: {
            options: {
                chart: {
                    type: 'line'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{series.color};">{point.y:.1f}</span>',
                    footerFormat: '',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        groupPadding:.05,
                        pointPadding: 0,
                        borderWidth: 0
                    }
                },
                legend: {
                    enabled: false
                }
            },
            series: $scope.chartSeries.balance,
            size: {
                height:120
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Balance',
                align: 'left'

            },
            xAxis: {
                labels: {
                    enabled: true
                },
                title: {
                    enabled: false
                },
                lineColor: '#CBCBCB',
                tickWidth: 0,
                categories: $scope.chartSeries.categories,
                type: 'category'
            },
            yAxis: {
                endOnTick: false,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                startOnTick: false,
                minPadding: 0.5,
                title: {
                    text: ""
                }
            }
        }
    };

    $scope.refresh = function() {
        $timeout( function() {
            //Stop refreshing
            $scope.$broadcast('scroll.refreshComplete');
        },1000);
    };
    $scope.visibleSearch = false;
    $scope.toggleSearch = function() {
        $scope.visibleSearch = ($scope.visibleSearch) ? false : true;
//        if ($scope.visibleSearch) { //On show search box - scroll to top
            $ionicScrollDelegate.$getByHandle('transactionsScroll').scrollTop();
//        }
    };
    $scope.moreDataCanBeLoaded = function() {
        return ($scope.transactions.length < 30) ? true : false;
    };
    $scope.loadMore = function() {
        console.log("Infinitive scroll");
        function randomTransaction() {
            return new Transaction({
                "id": 101,
                "cardID": $scope.card.id,
                "balance": Math.random()*7000,
                "name": "New transactions #"+$scope.transactions.length,
                "timestamp": new Date().getTime()
            })
        }
        $timeout(function() {
            var i = 25;
            while (i--) {
                $scope.transactions.push(randomTransaction());
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.$broadcast('scroll.resize');
            $scope.$broadcast('scroll.resize')
        }, 5000);
    }
}])

.controller('LocationsCtrl', function($scope) {
    $scope.$on('viewState.viewEnter', function(e, d) {
        console.log('View enter', e, d, $scope);
        var mapEl = angular.element(document.querySelector('.angular-google-map'));
        var iScope = mapEl.isolateScope();
        var map = iScope.map;
        google.maps.event.trigger(map, "resize");
    });
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        bounds: {},
        zoom: 8
    };
})

.controller("TabsCtrl", function($scope, $ionicTabsDelegate) {

})
.controller("MainCtrl", function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
})
.controller("LoginCtrl", function($scope) {

});
