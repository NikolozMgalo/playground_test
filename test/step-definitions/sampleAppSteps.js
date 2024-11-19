import SampleAppPage from '../page-objects/SampleAppPage.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import Browser from '../../framework/browser/Browser.js';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import AllureReporter from '@wdio/allure-reporter';


When('I select Sample App page', async () => {
    AllureReporter.addStep('I select Sample App page')
    AllureReporter.addAttachment(await Browser.addScreenshot('example'))
    await SampleAppPage.clickSampleAppButton();
});

When('I enter username', async () => {
    AllureReporter.addStep('I enter username')
    AllureReporter.addSeverity('blocker')
    await SampleAppPage.enterUsername(process.env.USERNAME);
});

When('I enter password', async () => {
    AllureReporter.addStep('I enter password')
    await SampleAppPage.enterPassword(process.env.PASSWORD);
});

When('I click on login button', async () => {
    AllureReporter.addStep('I click on login button')
    await SampleAppPage.clickLoginButton();
});

Then('I should see welcome message', async () => {
    AllureReporter.addStep('I should see welcome message')
    assert.isTrue(await SampleAppPage.checkLoginStatus(), 'did not login successfully');
});