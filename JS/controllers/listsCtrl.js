/**
 * Created by Sasha on 03.12.2016.
 */
angular.module('app').controller('listsCtrl', function($scope, listsFactory){

   listsFactory.getLists().success(function(result){
        $scope.lists=result;
        })
        .error(function(result){

    });




    this.addList = function () {
        console.log(this.listName);
        listsFactory.addList(this.listName);
    };





      // listsFactory.addList(this.listName);
      //  this.listName='';


   /* $http.get('http://localhost:3001/lists')
        .success(function(result){

            this.lists= result;

        })
        .error(function(result){
            console.log('error listsFactory');
        });*/




});