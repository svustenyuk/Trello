/**
 * Created by Sasha on 04.12.2016.
 */
angular.module('app').controller('listCtrl', function(listsFactory, cardFactory){
    this.removeList = function(list){
        listsFactory.removeList(list);
   };

    this.getCards = function(list){
        return cardFactory.getCards(list);
    };

    this.createCard = function (list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription='';
    };
});