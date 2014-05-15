/**
 * Модель данных Card - пластиковая карта банка
 * @author Alexey Bondarenko <alexeybondarenko@me.com>
 * @version 0.1
 * @constructor
 * @this {Card}
 * @param {Number}  id           Идентификатор карты
 * @param {Number}  ownerID     Идентификатор владельца карты
 * @param {String}  createdAt   Дата оформления карты
 *
 * @param {Number}  number       Номер карты 16-цифр. Используем string, потому то в int
 * @param {String}  name         Название карты
 * @param {float}   balance       Сумма остатка на карте
 * @param {String}  currency     Валюта
 * @param {String}  type         Тип карты: credit (кредитная) или debit (дебетовая)
 **/

var CardModel = function(id, ownerID, createdAt, name, number, balance, currency, type) {

    /**
     * Идентификатор карты
     * @type Number
     **/
    this.id = id || 0;
    /**
     * Идентификатор владельца карты
     * @type Number
     **/
    this.ownerID = ownerID || 0;
    /**
     * Дата оформления карты
     * @type Date
     **/
    this.createdAt = createdAt;
    /**
     * Название карты
     * @type String
     **/
    this.name = name || 'Test card';
    /**
     * 16-разрядный номер карты
     * @type Number
     */
    this.number = number || '1234567812345678';
    /**
     * Сумма средств на карте
     * @type float
     */
    this.balance = balance || 999.99;
    /**
     * Вылюта карты
     * @type String
     */
    this.currency = currency || 'uah';
    /**
     * Тип карты: кредитная или дебетовая.
     * @type String
     */
    this.type = (type == 'credit' || type == 'debit') ? type : undefined;

};
