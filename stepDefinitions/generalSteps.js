import { Given, When, Then } from '@cucumber/cucumber';

Given('I have reached a page', async function () {
  await browser.url('https://app.acvauctions.com/');
  await browser.pause(10000);
});

When('I load the same page again', async function () {
  await browser.url('https://app.acvauctions.com/');
});

Then('I should see an error', async function () {
  // It should be hanging
});
