angular.module('example.routes', ['ui.router', 'pages'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('page-select', {
        url: '/',
        templateUrl: 'page-select.tpl.html',
        controller: function($scope, $state){

        }
      });
  });