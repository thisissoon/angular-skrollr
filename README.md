# Angular Skrollr

[![Build Status](https://travis-ci.org/thisissoon/angular-skrollr.svg?branch=master)](https://travis-ci.org/thisissoon/angular-skrollr)
[![Coverage Status](https://coveralls.io/repos/thisissoon/angular-skrollr/badge.svg?branch=master)](https://coveralls.io/r/thisissoon/angular-skrollr?branch=master)

Angular Skrollr wraps the skrollr.js library to provide a mechanisim for configuring, initialising skrollr and calling skrollr.refresh() when the DOM is updated.


## Install

```
bower install angular-skrollr
bower install skrollr
```

## Usage

```js
// 1. configure skrollr in your app config
var myApp = angular.module("myApp", ["sn.skrollr"]);
myApp.config(["snSkrollrProvider", function(snSkrollrProvider) {
  snSkrollrProvider.config = { smoothScrolling: true, ... };
}]);

// 2. initialise skrollr at runtime
myApp.run(["snSkrollr", function(snSkrollr) {
  snSkrollr.init();
}])

```

```html
<!-- 3. add the sn-skrollr directive, along with skrollr animation attributes, to the elements you wish to animate -->
<div
  sn-skrollr
  data-100p-top="transform: translateY(900px)"
  data-top="transform: translateY(0px)"
  data--100p-top="transform: translateY(-900px)"
>
  ...
</div>
```
For more information on the skrollr configuration options that may be set in step one [check out this list](https://github.com/Prinzhorn/skrollr#skrollrinitoptions).

---

This project structure is based on the [angular-seed](https://github.com/angular/angular-seed) application skeleton for a typical [AngularJS](http://angularjs.org/) web app.

The project is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Clone Angular Skrollr repository

Clone the angular-skrollr repository using [git][git]:

```
cd path/to/parent/directory
git clone git@github.com:thisissoon/angular-skrollr.git
cd angular-skrollr
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code. The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].
* We run regular tasks like code minification via `grunt`, a [javascript task runner][grunt].


The following tools require super user privileges so you will need to install them separately like so:

```
sudo npm install -g bower
sudo npm install -g grunt-cli
```

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/components` - contains the angular framework files and other libraries

### Install Libraries

We install our frontend libraries via `bower`, a [client-side code package manager][bower].

All frontend depenancies such as angular will be installed when running `npm install`. To manually install all dependencies run:

```
bower install
```

To install a new library such as bootstrap we can simply do:

```
bower install bootstrap --save
```

And this will download the bootstrap package from bower and also update the `bower.json` file to include that package. You will then need to add the script tag to `app/index.html` like so:

```html
<script src="path/to/bootstrap.js"></script>
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
grunt server
```

Now browse to the app at `http://localhost:8000/app/`.

If you are doing any javascript development you can instead run:

```
grunt serverjs
```

To run tests as well every time a javascript file is updated

To watch all files run:

```
grunt serverall
```

To run tests or compile less to css when the relevent files are updated.

### Running the build script

To create a build to deploy for a production environment simply run:

```
grunt build
```

The build files will then be in the `dist/` directory.


## Directory Layout

```

app/                    --> all of the files to be used in production
  components/           --> all of our javascript libraries (installed using bower)
  index.html            --> app layout file (the main html template file of the app)
  js/                   --> javascript files
    {app}/              --> angular module javascript files
      {app}.js          --> angular module initialisation
      config.js         --> angular module config
      controllers/      --> controllers
        {view}Ctrl.js
      directives/       --> directives
        {module}.js
modules/                --> static html files for building and testing styling and mark up
  {module}/
    index.html
tests/                  --> test config and source files
  e2e/                  --> end-to-end specs
    specs/
      scenarios.js
    protractor.conf.js  --> config file for running e2e tests with Protractor
  unit/                 --> unit level specs/tests
    {app}/              --> follows the same folder structure as javascript files in app folder
      controllers/      --> controller folder
        {view}Ctrl.js   --> view controller tests
      directives/
        {module}.js     --> module directive test

```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with [Grunt][grunt].

* the configuration is found in `Gruntfile.js`
* the unit tests are found in `tests/unit/`.

The easiest way to run the unit tests is to do:

```
grunt test
```

This script will start the Jasmine test runner to execute the unit tests. You can also run:

```
grunt serverjs
```

Where the grunt watch command will sit and watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if you unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.


### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `tests/e2e/protractor.conf.js`
* the end-to-end tests are found in `tests/e2e/specs/`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it. To run end to end tests we first need to install protractor with global permissions. You may need to run this command with superuser privileges:

```
npm install -g protractor
```

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied grunt task:

```
grunt e2e
```

Behind the scenes this will also run `webdriver-manager update && webdriver-manager start`. This will download and install the latest version of the stand-alone WebDriver tool and start the Selenium web server. This script will execute the end-to-end tests against the application being hosted on the
development server.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[grunt]: http://gruntjs.com/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
