angular.module('example.color-change', ['templates', 'ng.lodash'])
  .directive('colorChange', function($interval, _, $timeout){
    return {
      restrict: 'E',
      scope: {
        rgb: '='
      },
      templateUrl: 'color-change.tpl.html',
      transclude: true,
      link: function(scope, element){
        var compiled = _.template("rgb({{r}}, {{g}}, {{b}})");
        var fraction = 1.0;
        var diff = -0.02;
        var setColor = function() {
          scope.color = compiled({
            r: Math.round(scope.rgb[0] * fraction),
            g: Math.round(scope.rgb[1] * fraction),
            b: Math.round(scope.rgb[2] * fraction)
          });
          var spans = element.find('span');
          spans[0].style.color = scope.color;
          spans[1].style.color = scope.color;
          fraction += diff;
          if(fraction <= 0.3 || fraction >= 1.0){
            diff = -diff;
          }
        };
        setColor();
        $interval(setColor, 100);
      }
    };
  });