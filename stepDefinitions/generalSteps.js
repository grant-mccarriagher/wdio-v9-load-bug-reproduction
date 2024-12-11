import { Given, Then } from '@cucumber/cucumber';

Given('I have reached a page', async function () {
  const mock = await browser.mock('https://some-website.com/*');
  mock.respond({}, {
    statusCode: 404,
    fetchResponse: false
  });

  await browser.url('https://app.acvauctions.com/');
  await browser.pause(10000);

  await browser.url('https://app.acvauctions.com/');
  await browser.pause(10000);
});

Then('I should see an error', async function () {
  // It should be hanging
});
