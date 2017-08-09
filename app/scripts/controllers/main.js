'use strict';

/**
 * @ngdoc function
 * @name frontAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontAngularJsApp
 */

	angular.module('frontAngularJsApp').controller('MainCtrl', ['$scope', 'ImageService', function($scope, ImageService) {  

	$scope.datosComp = [];
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
