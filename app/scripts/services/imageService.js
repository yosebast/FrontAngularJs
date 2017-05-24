  
'use strict';

/**
 * @ngdoc function
 * @name frontAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontAngularJsApp
 */
angular.module('frontAngularJsApp').factory('ImageService', ['$http', '$q', function ($http, $q) {
  	
  	var REST_SERVICE_URI = 'http://localhost:8082/CompraVenta/imagenes';

    //var REST_SERVICE_URI = 'http://localhost:8082/Spring4MVCAngularJSExample/user/'
  
  	var factory = { fetchAllImages: fetchAllImages}
  	return  factory;

function fetchAllImages(){

	 var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }





  }]);