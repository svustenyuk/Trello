/**
 * Created by Sasha on 03.12.2016.
 */
angular.module('app').factory('listsFactory', function($http){
    var service = {};




        /* $http.get('http://localhost:3001/lists')
            .success(function(result){

                service.data=result;

            })
            .error(function(result){
                console.log('error listsFactory');
            });*/

    service.getLists=function(){
        return $http.get('http://localhost:3001/lists');
    };





    service.addList = function (listName){
        console.log(listName);
        $http.post('http://localhost:3001/lists', listName)
            .success(function(result){

            })
            .error(function(result){
                console.log('error listsFactory', result);
            });


        /*lists.push({
            id: _.uniqueId('list_ '),
            listName: listName
        });*/
    };
    service.removeList = function(list){
        _.pull(lists, list);
    };

    return service;
});
