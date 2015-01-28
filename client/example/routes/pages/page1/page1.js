angular.module('page1', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('page1', {
        parent: 'pages',
        url: '/page1',
        views: {
          body: {
            templateUrl: 'page1.tpl.html',
            controller: function($scope, $state){

            }
          }
        }
      });
  });