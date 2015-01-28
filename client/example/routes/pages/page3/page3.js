angular.module('page3', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('page3', {
        parent: 'pages',
        url: '/page3',
        views: {
          body: {
            templateUrl: 'page3.tpl.html',
            controller: function($scope, $state){

            }
          }
        }
      });
  });