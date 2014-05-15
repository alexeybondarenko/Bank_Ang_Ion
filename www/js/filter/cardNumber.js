angular.module('Banking.filters')

/**
 * Маскированны номер карты
 * @function
 * @type string
 */
.filter('creditCardMaskedNumber', function () {
    return function (number) {
        return num.substr(0,4)+'****'+num.substr(-4);
    };
})
/**
 * Последние 4 цифры карты
 * @function
 * @type string
 */
.filter('creditCardLastDigits', function () {
    return function (number) {
        return "****"+number.substr(-4);
    };
});