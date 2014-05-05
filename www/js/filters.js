angular.module('Banking')

    .filter('currencySymbol', function() {
    return function(input){

        var codesSymbol = {
            ALL : 'Lek', //Albania Lek
            AFN : '؋', //Afghanistan Afghani
            ARS : '$', //Argentina Peso
            AWG : 'ƒ', //Aruba Guilder
            AUD : '$', //Australia Dollar
            AZN : 'ман', //Azerbaijan New Manat
            BSD : '$', //Bahamas Dollar
            BBD : '$', //Barbados Dollar
            BYR : 'p.', //Belarus Ruble
            BZD : 'BZ$', //Belize Dollar
            BMD : '$', //Bermuda Dollar
            BOB : '$b', //Bolivia Boliviano
            BAM : 'KM', //Bosnia and Herzegovina Convertible Marka
            BWP : 'P', //Botswana Pula
            BGN : 'лв', //Bulgaria Lev
            BRL : 'R$', //Brazil Real
            BND : '$', //Brunei Darussalam Dollar
            KHR : '៛', //Cambodia Riel
            CAD : '$', //Canada Dollar
            KYD : '$', //Cayman Islands Dollar
            CLP : '$', //Chile Peso
            CNY : '¥', //China Yuan Renminbi
            COP : '$', //Colombia Peso
            CRC : '₡', //Costa Rica Colon
            HRK : 'kn', //Croatia Kuna
            CUP : '₱', //Cuba Peso
            CZK : 'Kč', //Czech Republic Koruna
            DKK : 'kr', //Denmark Krone
            DOP : 'RD$', //Dominican Republic Peso
            XCD : '$', //East Caribbean Dollar
            EGP : '£', //Egypt Pound
            SVC : '$', //El Salvador Colon
            EEK : 'kr', //Estonia Kroon
            EUR : '€', //Euro Member Countries
            FKP : '£', //Falkland Islands (Malvinas) Pound
            FJD : '$', //Fiji Dollar
            GHC : '¢', //Ghana Cedis
            GIP : '£', //Gibraltar Pound
            GTQ : 'Q', //Guatemala Quetzal
            GGP : '£', //Guernsey Pound
            GYD : '$', //Guyana Dollar
            HNL : 'L', //Honduras Lempira
            HKD : '$', //Hong Kong Dollar
            HUF : 'Ft', //Hungary Forint
            ISK : 'kr', //Iceland Krona
            INR : '', //India Rupee
            IDR : 'Rp', //Indonesia Rupiah
            IRR : '﷼', //Iran Rial
            IMP : '£', //Isle of Man Pound
            ILS : '₪', //Israel Shekel
            JMD : 'J$', //Jamaica Dollar
            JPY : '¥', //Japan Yen
            JEP : '£', //Jersey Pound
            KZT : 'лв', //Kazakhstan Tenge
            KPW : '₩', //Korea (North) Won
            KRW : '₩', //Korea (South) Won
            KGS : 'лв', //Kyrgyzstan Som
            LAK : '₭', //Laos Kip
            LVL : 'Ls', //Latvia Lat
            LBP : '£', //Lebanon Pound
            LRD : '$', //Liberia Dollar
            LTL : 'Lt', //Lithuania Litas
            MKD : 'ден', //Macedonia Denar
            MYR : 'RM', //Malaysia Ringgit
            MUR : '₨', //Mauritius Rupee
            MXN : '$', //Mexico Peso
            MNT : '₮', //Mongolia Tughrik
            MZN : 'MT', //Mozambique Metical
            NAD : '$', //Namibia Dollar
            NPR : '₨', //Nepal Rupee
            ANG : 'ƒ', //Netherlands Antilles Guilder
            NZD : '$', //New Zealand Dollar
            NIO : 'C$', //Nicaragua Cordoba
            NGN : '₦', //Nigeria Naira
            KPW : '₩', //Korea (North) Won
            NOK : 'kr', //Norway Krone
            OMR : '﷼', //Oman Rial
            PKR : '₨', //Pakistan Rupee
            PAB : 'B/.', //Panama Balboa
            PYG : 'Gs', //Paraguay Guarani
            PEN : 'S/.', //Peru Nuevo Sol
            PHP : '₱', //Philippines Peso
            PLN : 'zł', //Poland Zloty
            QAR : '﷼', //Qatar Riyal
            RON : 'lei', //Romania New Leu
            RUB : 'руб', //Russia Ruble
            SHP : '£', //Saint Helena Pound
            SAR : '﷼', //Saudi Arabia Riyal
            RSD : 'Дин.', //Serbia Dinar
            SCR : '₨', //Seychelles Rupee
            SGD : '$', //Singapore Dollar
            SBD : '$', //Solomon Islands Dollar
            SOS : 'S', //Somalia Shilling
            ZAR : 'R', //South Africa Rand
            KRW : '₩', //Korea (South) Won
            LKR : '₨', //Sri Lanka Rupee
            SEK : 'kr', //Sweden Krona
            CHF : 'CHF', //Switzerland Franc
            SRD : '$', //Suriname Dollar
            SYP : '£', //Syria Pound
            TWD : 'NT$', //Taiwan New Dollar
            THB : '฿', //Thailand Baht
            TTD : 'TT$', //Trinidad and Tobago Dollar
            TRY : '', //Turkey Lira
            TRL : '₤', //Turkey Lira
            TVD : '$', //Tuvalu Dollar
            UAH : '₴', //Ukraine Hryvna
            GBP : '£', //United Kingdom Pound
            USD : '$', //United States Dollar
            UYU : '$U', //Uruguay Peso
            UZS : 'лв', //Uzbekistan Som
            VEF : 'Bs', //Venezuela Bolivar
            VND : '₫', //Viet Nam Dong
            YER : '﷼', //Yemen Rial
            ZWD : 'Z$' //Zimbabwe Dollar //Zimbabwe Dollar
        };
        return codesSymbol[input.toUpperCase()];
    };
});
