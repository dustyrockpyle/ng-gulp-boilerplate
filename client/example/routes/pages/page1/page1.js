angular.module('page1', ['ui.router', 'example.color-change', 'ng.lodash'])
  .config(function($stateProvider){
    $stateProvider
      .state('page1', {
        parent: 'pages',
        url: '/page1',
        views: {
          body: {
            templateUrl: 'page1.tpl.html',
            controller: function($scope, $state){
              $scope.RGB = [255, 0, 0];
              console.log($scope.RGB);
            }
          }
        }
      });
  });