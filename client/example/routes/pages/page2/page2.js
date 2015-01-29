angular.module('page2', ['ui.router', 'example.color-change'])
  .config(function($stateProvider){
    $stateProvider
      .state('page2', {
        parent: 'pages',
        url: '/page2',
        views: {
          body: {
            templateUrl: 'page2.tpl.html',
            controller: function($scope, $state){
            }
          }
        }
      });
  });