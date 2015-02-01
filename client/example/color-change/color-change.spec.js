describe('color-change directive', function() {
  beforeEach(module('example.color-change'));
  beforeEach(module('ng.lodash'));
  var scope, element, isolateScope, $interval, colorTemplate;

  beforeEach(inject(function($compile, _$interval_, $rootScope, _){
    $interval = _$interval_;
    element = '<color-change rgb="RGB">hello</div>';
    scope = $rootScope.$new();
    scope.RGB = [255, 0, 0];
    element = $compile(element)(scope);
    scope.$digest();
    isolateScope = element.isolateScope();
    colorTemplate = _.template('rgb({{ color }}, 0, 0)');
  }));

  it('should transfer rgb properly', function() {
    expect(isolateScope.rgb).toBe(scope.RGB);
  });

  var initialColor = 'rgb(255, 0, 0)';
  it('should have color initialized to rgb', function(){
    expect(isolateScope.color).toBe(initialColor);
  });

  it('should have two style elements with the initialColor', function(){
    expect(element.find('span').length).toBe(2);
    expect(element.find('span')[0].style.color).toBe(initialColor);
    expect(element.find('span')[1].style.color).toBe(initialColor);
  });

  var diff = 0.02;
  var tick = 100;
  var limit = 35;

  it('should decrease the color by diff after tick', function(){
    $interval.flush(tick);
    scope.$digest();
    var color = Math.round(255*(1-diff));
    expect(element.find('span')[0].style.color).toBe(colorTemplate({color: color}));
    expect(element.find('span')[1].style.color).toBe(colorTemplate({color: color}));
  });

  it('should decrease the color down to the limit', function(){
    $interval.flush(tick*limit);
    scope.$digest();
    var color = Math.round(255*(1-diff*limit));
    expect(element.find('span')[0].style.color).toBe(colorTemplate({color: color}));
    expect(element.find('span')[1].style.color).toBe(colorTemplate({color: color}));
  });

  it('should increase the color after limit', function(){
    $interval.flush(tick*(limit + 1));
    scope.$digest();
    var color = Math.round(255*(1-diff*(limit-1)));
    expect(element.find('span')[0].style.color).toBe(colorTemplate({color: color}));
    expect(element.find('span')[1].style.color).toBe(colorTemplate({color: color}));
  });

  it('should decrease again after twice the limit', function(){
    $interval.flush(tick*(2*limit + 1));
    scope.$digest();
    var color = Math.round(255*(1-diff));
    expect(element.find('span')[0].style.color).toBe(colorTemplate({color: color}));
    expect(element.find('span')[1].style.color).toBe(colorTemplate({color: color}));
  });
});