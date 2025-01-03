import { Given, When, Then } from '@cucumber/cucumber';

Given('I have reached a page', async function () {
  await browser.url('https://app.acvauctions.com/');
  await $('.acv-logo').waitForDisplayed();

  const mock = await browser.mock('https://www.some-website.com/*');

  mock.respond([{
    title: 'Injected Todo',
    order: null,
    completed: false,
    url: "http://todo-backend-express-knex.herokuapp.com/916"
  }], {
      statusCode: 404,
      headers: {
          'x-custom-header': 'foobar'
      }
  });
});

When('I load the same page again', async function () {
  for(let i = 0; i < 10; i++) {
    await browser.url('https://app.acvauctions.com/');
    await $('.acv-logo').waitForDisplayed();
    await browser.pause(5000);
    await $('.acv-logo').waitForDisplayed();
  }
});

Then('I should see an error', async function () {
  // It should be hanging
});
