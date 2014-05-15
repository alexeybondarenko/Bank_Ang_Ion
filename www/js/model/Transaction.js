/**
 * Модель Transaction - одна банковская операция
 * @constructor
 */
var Transaction = function(obj) {
    /**
     * Описание
     * @type {string}
     */
    this.text = obj.text || '';
    /**
     * Сумма
     * @type {number}
     */
    this.price = obj.price || 0;
    /**
     * Время совершения
     * @type {Date}
     */
     this.timestamp = new Date(obj.timestamp || null);
    /**
     * Идентификатор карты
     * @type {number}
     */
    this.card_id = obj.card_id || null;

    this.info = function(){
        return text+' '+price;
    };

    this.formatedDate = function(){
         return this.timestamp.format("yyyy-MM-dd h:mm:ss");
    };
    this.type = type || null;

    this.typeIconName = function() {
        var res = '';
        switch (this.type) {
            case 'phone':
                res += 'fa-mobile-phone fa-2x';
                break;
            case 'cafe':
                res += 'fa-coffee fa-1x';
                break;
            case 'store':
                res += 'fa-shopping-cart fa-1x';
                break;
            case 'terminal pay':
                res += 'fa-angle-double-right fa-1x';
                break;
            case 'food':
                res += 'fa-lemon-o fa-1x';
                break;
            case 'atm-cash':
                res += 'fa-money fa-1x';
                break;
            default:
                res += ''

        }
        return res;
    };
};
