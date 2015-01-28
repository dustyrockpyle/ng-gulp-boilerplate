angular.module('pages', ['ui.router', 'page1', 'page2', 'page3'])
  .config(function($stateProvider){
    $stateProvider
      .state('pages', {
        abstract: true,
        templateUrl: 'pages.tpl.html',
        controller: function($scope, $state){

        }
      });
  });