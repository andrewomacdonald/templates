(function() {
    'use strict';
    angular
        .module('NAME_OF_MODULE')
        .factory('NAME_OF_FACTORY', NAME_OF_FACTORY);

    var factory = {};

    function NAME_OF_FACTORY(ANGULAR_MODULES_YOU_WANT_INJECTED, FOR_EXAMPLE:, $http) {
        factory.nameOfFactoryFunction = function () {
            //functionality here
        };

        factory.exampleOfUsing$http = function () {
            return $http.get('/NAME_OF_ROUTE_HERE').then(function(data) {
                return data;
            });
        }

        return factory;
    }

})();

//Generally used to abstract functionality that you'll be using across multiple controllers (API calls, for example). if you want to call
//a function from this factory, you would inject it into a controller and then invoke is as NAME_OF_FACTORY.nameOfFactoryFunction()

