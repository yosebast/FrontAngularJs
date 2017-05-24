'use strict';

/**
 * @ngdoc overview
 * @name frontAngularJsApp
 * @description
 * # frontAngularJsApp
 *
 * Main module of the application.
 */
	angular.module('frontAngularJsApp').controller('ContactCtrl', ['$scope', 'ImageService', function($scope, ImageService) {  


    fetchAllUsers();

    function fetchAllUsers(){
        ImageService.fetchAllImages()
            .then(
            function(d) {
               $scope.datosComp= d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }


}]);
