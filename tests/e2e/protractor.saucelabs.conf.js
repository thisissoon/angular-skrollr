// A reference configuration file.
exports.config = {

  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 11000,

  // ----- What tests to run -----
  //
  // Spec patterns are relative to the location of this config.
  specs: [
    'specs/*.js',
  ],

  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (Chrome: Linux) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '39',
    'selenium-version': '2.43.1',
    'platform': 'Linux'
  }, {
    'browserName': 'firefox',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (FF: Linux) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '34',
    'selenium-version': '2.43.1',
    'platform': 'Linux'
  }, {
    'browserName': 'safari',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (Safari: OS X 10.10) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '8',
    'selenium-version': '2.43.1',
    'platform': 'OS X 10.10'
  }, {
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (IE11: Win 8.1) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '11',
    'selenium-version': '2.43.1',
    'platform': 'Windows 8.1'
  }, {
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (IE10: Win 8) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '10',
    'selenium-version': '2.43.1',
    'platform': 'Windows 8'
  }, {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (Chrome: Android 5.0) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '5.0',
    'platformVersion': '5.0',
    'platformName': 'Android',
    'appiumVersion': '1.3.4',
    'deviceName': 'Android Emulator',
    'device-orientation': 'portrait'
  }, {
    'browserName': 'safari',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'AngularJS Template (Safari: iOS 8.1) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '8.1',
    'platformVersion': '8.1',
    'platformName': 'iOS',
    'appiumVersion': '1.3.4',
    'platform': 'iOS',
    'deviceName': 'iPhone Simulator',
    'device-orientation': 'portrait'
  }],

  // ----- More information for your tests ----
  //
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://127.0.0.1:8000',

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>
  rootElement: 'body',

  onPrepare: function() {
    browser.getCapabilities().then(function (cap) {
      if ((cap.caps_.platform !== "iOS") && (cap.caps_.platform !== "ANDROID")){
        browser.driver.manage().window().setSize(1366, 768)
      }
    });
  },

  // ----- The test framework -----
  //
  // Jasmine is fully supported as a test and assertion framework.
  // Mocha has limited beta support. You will need to include your own
  // assertion framework if working with mocha.
  framework: 'jasmine',

  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  }

};
