/**
 * Created by Sasha on 03.12.2016.
 */
angular.module('app').controller('listsCtrl', function(listsFactory){
    
    this.lists = listsFactory.getLists();
    
    this.addList = function () {
        listsFactory.addList(this.listName);
        this.listName='';
    };

});