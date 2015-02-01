# ng-gulp-boilerplate
Bootstrap + ui-router based template for angular SPAs.

### Getting Started
1. Clone the repo
2. Install [nodejs](http://nodejs.org/)
3. At a command prompt, enter the following commands:
  * npm install bower -g
  * npm install gulp -g
4. cd to ng-gulp-boilerplate/gulp, and enter the following commands:
  * npm install
  * bower install
5. To begin development cd to ng-gulp-boilerplate, and enter the following command:
  * gulp watch --config ../config.yaml

Now a development server will be running at the 'port' specified in config.yaml (default 9000). 

You can navigate to http://localhost:9000/example to see an example app, and http://localhost:9000/test 
to see a test environment (Which I use as a local plunkr/jsfiddle). 

Make sure you have livereload running in your browser.

By default changing any less file in the client folder will refresh the style in browser (no page reload). 
Changing any javascript or html file will reload the page automatically. 

Karma will launch, run your tests, and re-test them whenever a javascript file changes.

All the source/watch paths can be configured in config.yaml.

TODO: Detail how to specify a new app, and what options are available.
