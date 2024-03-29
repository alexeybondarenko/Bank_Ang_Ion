angular.module('Banking.controllers')
    .controller('PaymentsCtrl', function($scope, $location, Cards, PaymentsService) {

        $scope.cards = Cards.all();
        $scope.payment = PaymentsService.get();
        if ($scope.payment.paymentCardID == undefined) $scope.payment.paymentCardID = $scope.cards[0].id;

        $scope.otp = '';

        $scope.templates = PaymentsService.all();
        $scope.isTemplate = PaymentsService.isTemplate;

        $scope.url = $location.path();

        $scope.load = function(payment) {
            PaymentsService.load(payment);
        };

        $scope.cities = [
            { name: 'Kiev', id: 1 }
//            w{ name: 'Dnepropetrovsk', id: 2}
        ];
        $scope.companies = [
            {
                id: 1,
                name: "АК \"Київенерго\" (Киевский (ф-л)",
                accountNumber: 1000,
                cityID: 1,
                service: "elec"
            },
            {
                id: 2,
                name: "КИЇВОБЛЕНЕРГО, ПАТ",
                accountNumber: 1001,
                cityID: 1,
                service: "elec"
            }
//            ,
//            {
//                id: 3,
//                name: "Баришівська філія по експлуатації газового господарства публічного акціонерного товариства по газопостачанню та газифікації Київоблгаз",
//                accountNumber: 1002,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 4,
//                name: "Бориспольский фил.по экспуатации газхозяйства",
//                accountNumber: 1003,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 5,
//                name: "Броварской ф-л Киевоблгаза",
//                accountNumber: 1004,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 6,
//                name: "Васильковская филия  Киевоблгаз ВАТ",
//                accountNumber: 1005,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 7,
//                name: "ВАТ \"Київгаз\" (Киевский ф-л)",
//                accountNumber: 1006,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 8,
//                name: "Згуровская ФЕГГ",
//                accountNumber: 1007,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 9,
//                name: "Иванковская ФЕГГ",
//                accountNumber: 1008,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 10,
//                name: "Киево-Святошинська ФЕГГ ПАТ\"Київоблгаз\"",
//                accountNumber: 1009,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 11,
//                name: "Макаровская ф-я по эксплуатации газового хоз-ва ПАО Киевоблгаз",
//                accountNumber: 1010,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 12,
//                name: "Сквирська ФЕГГ",
//                accountNumber: 1011,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 13,
//                name: "Тетиевская ФЕГГ",
//                accountNumber: 1012,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 14,
//                name: "Фастовский ФЕГГ",
//                accountNumber: 1013,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 15,
//                name: "ФЭГХ БЕЛОЦЕРКОВСКИЙ ПАО Киевоблгаз",
//                accountNumber: 1014,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 16,
//                name: "Яготинская филия по эксплуатации газового хозяйства ПАО Киевоблгаз",
//                accountNumber: 1015,
//                cityID: 1,
//                service: "gas"
//            },
//            {
//                id: 17,
//                name: "Верхнеднепровское УЭГХ",
//                accountNumber: 1016,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 18,
//                name: "Днепрогаз ПАО",
//                accountNumber: 1017,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 19,
//                name: "Днепродзержинское УЭГХ",
//                accountNumber: 1018,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 20,
//                name: "Днепропетровскгаз Магдалиновское УЭГХ",
//                accountNumber: 1019,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 21,
//                name: "Единая квитанция Днепропетровск",
//                accountNumber: 1020,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 22,
//                name: "Единая Квитанция Павлоград",
//                accountNumber: 1021,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 23,
//                name: "Единая Квитанция Першотравенск",
//                accountNumber: 1022,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 24,
//                name: "Единый расчетный центр (Вольногорск)",
//                accountNumber: 1023,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 25,
//                name: "Единый расчетный центр (Желтые Воды)",
//                accountNumber: 1024,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 26,
//                name: "Единый расчетный центр Синельниково",
//                accountNumber: 1025,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 27,
//                name: "ЕК Верхнеднепровск",
//                accountNumber: 1026,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 28,
//                name: "ЕК Марганец",
//                accountNumber: 1027,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 29,
//                name: "ЕК Новомосковск",
//                accountNumber: 1028,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 30,
//                name: "ЕК Орджоникидзе",
//                accountNumber: 1029,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 31,
//                name: "ЕК Терновка",
//                accountNumber: 1030,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 32,
//                name: "Желтоводское УЭГХ",
//                accountNumber: 1031,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 33,
//                name: "Желтоводское УЭГХ (услуги)",
//                accountNumber: 1032,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 34,
//                name: "Магдалиновское УЭГХ",
//                accountNumber: 1033,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 35,
//                name: "Марганецкое  УЭГХ",
//                accountNumber: 1034,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 36,
//                name: "Никопольское УЭГХ",
//                accountNumber: 1035,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 37,
//                name: "Новомосковское УЭГХ",
//                accountNumber: 1036,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 38,
//                name: "Павлоградское  УЭГХ",
//                accountNumber: 1037,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 39,
//                name: "ПАТ Харьковгаз",
//                accountNumber: 1038,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 40,
//                name: "Першотравенское УГХ (разовые услуги)",
//                accountNumber: 1039,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 41,
//                name: "Першотравенское УЭГХ",
//                accountNumber: 1040,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 42,
//                name: "Покровская СЭГХ",
//                accountNumber: 1041,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 43,
//                name: "Синельниковское  УЭГХ",
//                accountNumber: 1042,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 44,
//                name: "Синельниковское УЭГХ (Васильковка)",
//                accountNumber: 1043,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 45,
//                name: "Синельниковское УЭГХ (Покровка)",
//                accountNumber: 1044,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 46,
//                name: "Солонянская  СЭГХ",
//                accountNumber: 1045,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 47,
//                name: "Солонянская СЭГХ (услуги)",
//                accountNumber: 1046,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 48,
//                name: "Царичанское  УЭГХ",
//                accountNumber: 1047,
//                cityID: 2,
//                service: "gas"
//            },
//            {
//                id: 49,
//                name: "Василькiвське РВЕ",
//                accountNumber: 1048,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 50,
//                name: "Верхньодніпровське РВЕ (разові послуги)",
//                accountNumber: 1049,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 51,
//                name: "Дільниця Новомоск. РВЕ",
//                accountNumber: 1050,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 52,
//                name: "Днiпропетровське МВЕ (електроенергія/акти)",
//                accountNumber: 1051,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 53,
//                name: "Днiпропетровський РВЕ",
//                accountNumber: 1052,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 54,
//                name: "Днепродзержинский РОЭ",
//                accountNumber: 1053,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 55,
//                name: "Днепропетровский РОЭ (разовые услуги)",
//                accountNumber: 1054,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 56,
//                name: "Единая квитанция Днепропетровск",
//                accountNumber: 1055,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 57,
//                name: "Единая Квитанция Павлоград",
//                accountNumber: 1056,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 58,
//                name: "Единая Квитанция Першотравенск",
//                accountNumber: 1057,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 59,
//                name: "Единый расчетный центр (Вольногорск)",
//                accountNumber: 1058,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 60,
//                name: "Единый расчетный центр (Днепродзержинск)",
//                accountNumber: 1059,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 61,
//                name: "Единый расчетный центр (Желтые Воды)",
//                accountNumber: 1060,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 62,
//                name: "Единый расчетный центр Синельниково",
//                accountNumber: 1061,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 63,
//                name: "ЕК Верхнеднепровск",
//                accountNumber: 1062,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 64,
//                name: "ЕК Марганец",
//                accountNumber: 1063,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 65,
//                name: "ЕК Новомосковск",
//                accountNumber: 1064,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 66,
//                name: "ЕК Орджоникидзе",
//                accountNumber: 1065,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 67,
//                name: "ЕК Терновка",
//                accountNumber: 1066,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 68,
//                name: "Жовтов. дiльниця ПРВЕ",
//                accountNumber: 1067,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 69,
//                name: "Криничанське РВЕ",
//                accountNumber: 1068,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 70,
//                name: "Магдалиновский РОЭ",
//                accountNumber: 1069,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 71,
//                name: "Магдалиновский РЭС (услуги)",
//                accountNumber: 1070,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 72,
//                name: "Марганецкий участок НРОЭ",
//                accountNumber: 1071,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 73,
//                name: "Межереческий участок ПРОЭ",
//                accountNumber: 1072,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 74,
//                name: "Межівське РВЕ",
//                accountNumber: 1073,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 75,
//                name: "Никопольский РОЭ",
//                accountNumber: 1074,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 76,
//                name: "Новомосковське РВЕ",
//                accountNumber: 1075,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 77,
//                name: "Орджоник. участок НРОЭ",
//                accountNumber: 1076,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 78,
//                name: "Павлоградский РОЭ (Электроэнергия)",
//                accountNumber: 1077,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 79,
//                name: "Першотрав дiльн ПРВЕ",
//                accountNumber: 1078,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 80,
//                name: "Петрик. дiльниця ЦРВЕ",
//                accountNumber: 1079,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 81,
//                name: "Петропавлiвський РВЕ",
//                accountNumber: 1080,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 82,
//                name: "Покровський РВЕ",
//                accountNumber: 1081,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 83,
//                name: "Правобережна дiл ДРВЕ",
//                accountNumber: 1082,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 84,
//                name: "Пятихатский РВЕ",
//                accountNumber: 1083,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 85,
//                name: "Синельниковский РОЭ",
//                accountNumber: 1084,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 86,
//                name: "Синельниковский РЭС (услуги)",
//                accountNumber: 1085,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 87,
//                name: "Солонянське РВЕ",
//                accountNumber: 1086,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 88,
//                name: "Томаківське МВЕ",
//                accountNumber: 1087,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 89,
//                name: "Участок Никоп РОЭ",
//                accountNumber: 1088,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 90,
//                name: "Участок Синельн. РОЭ",
//                accountNumber: 1089,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 91,
//                name: "Царичанське РВЕ",
//                accountNumber: 1090,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 92,
//                name: "Энергосбыт Придн. ЖД",
//                accountNumber: 1091,
//                cityID: 2,
//                service: "elec"
//            },
//            {
//                id: 93,
//                name: "Юрьеввский участок ПРОЭ (Электроэнергия)",
//                accountNumber: 1092,
//                cityID: 2,
//                service: "elec"
//            }
        ];

        $scope.verifyPayment =  function(payment) {
            $scope.savePayment();

            // Saving current template path
            $scope.payment.path = $location.path();

            $location.path('/tab/payment/verify');
            console.log('Processing payment: ',payment);
        };
        $scope.submitOtp = function(otp) {
            console.log("Valid: ",$scope.otp,otp);
            if (otp == undefined || otp != 1111) return false;

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

        $scope.otp_chain = function($event) {
            console.log($event, $event.target, +$event.target.attributes.getNamedItem('data-otp-chain').value);
            var charCode = $event.keyCode;
            if (charCode > 47 && charCode < 58 || charCode == 8) //digit
            {
                $event.preventDefault();
                if ($event.target.attributes['data-otp-chain']) {
                    var selectedChain = +$event.target.attributes.getNamedItem('data-otp-chain').value;
                    var next = selectedChain;
                    (charCode == 8) ? next -=1 : next+=1;
                    console.log(next);
                    var nextInput = document.querySelectorAll(".otp-chain input[data-otp-chain='"+next+"']")[0];
                    if (nextInput != undefined) {
                        nextInput.focus();
                        (charCode == 8) ? nextInput.setSelectionRange(nextInput.value.length,nextInput.value.length): nextInput.setSelectionRange(0,0);

                        console.log("Next", nextInput);
                    }
                }
                $event.target.value = $event.target.value.length == 0 ? String.fromCharCode(charCode) : $event.target.value;
                if (charCode == 8)  $event.target.value = '';
            }
        };
})
.filter('cardSelectInfo', function(card,$filter) {
    return card.name + "<b class='balance'>"+$filter('customCurrency')(card.balance, card.currencySymbol)+"</b>";
});