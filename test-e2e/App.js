'use strict';


const WAIT = 1000;

module.exports = {
  'Test "Hello, SydJS!" appears on the screen'(browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', WAIT)
      .assert.containsText('body', 'Hello, SydJS!')
      .end();
  }
};
