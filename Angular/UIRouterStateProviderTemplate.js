(function() {
    angular.module('NAME_OF_MODULE', ['ANGULAR MODULES YOU WANT TO INJECT'])
        .config(['stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            // Use this to route anything that isn't a specifically listed state to a default state!
            $urlRouterProvider.otherwise('/');

            var applicationState = [
                {
                    name: 'State 1',
                    url: '/URL1',
                    controller: 'Controller1',
                    template: 'filePath/leadingTo/template1.html'
                },
                {
                    name: 'State 2',
                    url: '/URL2',
                    controller: 'Controller2',
                    template: 'filePath/leadingTo/template2.html'
                },
                {
                    name: 'otherwise',
                    url: '/',
                    template: 'filePath/leadingTo/otherwiseTemplate.html'
                }
            ];

            applicationState.forEach(function(state) {
                $stateProvider.state(state);
            });
        }]);
})();