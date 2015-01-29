angular.module('example.color-change', [])
  .directive('colorChange', function($interval){
    return {
      restrict: 'E',
      scope: {
        rgb: '='
      },
      templateUrl: 'color-change.tpl.html',
      transclude: true,
      controller: function($scope, $element, $interval, _){
        var compiled = _.template("rgb({{r}}, {{g}}, {{b}})");
        var fraction = 1.0;
        var diff = -.02;
        var setColor = function() {
          $scope.color = compiled({
            r: Math.round($scope.rgb[0] * fraction),
            g: Math.round($scope.rgb[1] * fraction),
            b: Math.round($scope.rgb[2] * fraction)
          });
          var spans = $element[0].getElementsByTagName('span');
          spans[0].style.color = $scope.color;
          spans[1].style.color = $scope.color;
          fraction += diff;
          if(fraction <= .3 || fraction >= 1.0){
            diff = -diff;
          }
        };
        $interval(setColor, 100);
      }
    };
  });