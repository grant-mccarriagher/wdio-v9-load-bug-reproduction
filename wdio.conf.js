let config = {
  automationProtocol: 'webdriver',
  hostname: 'localhost',
  specs: [
    './features/**/*.feature'
  ],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    browserVersion: 'stable',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--disable-infobars',
        '--window-size=1920,1080',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--headless',
      ],
    },
    'goog:loggingPrefs': {
      browser: 'ALL',
      driver: 'ALL'
    },
    pageLoadStrategy: 'eager'
  }],
  logLevel: 'trace',
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./stepDefinitions/**/*.js'],
    snippets: true,
    source: true,
    strict: false,
    timeout: 1200000,
    ignoreUndefinedDefinitions: false,
  },
};

export { config };
