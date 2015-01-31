describe( 'dummy test', function() {
  beforeEach(module('example'));
  it( 'ensure the module loads correctly', inject(function() {
    expect(true).toBeTruthy();
  }));
});