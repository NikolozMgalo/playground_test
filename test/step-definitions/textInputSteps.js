import Browser from "../../framework/browser/Browser.js";
import TextInputPage from '../page-objects/TextInputPage.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import AllureReporter from "@wdio/allure-reporter";

const text = 'abcd'

When('I select text input', async () => {
    AllureReporter.addStep('Select text input');
    await TextInputPage.selectTextInput();
});


When('I write text in the input field', async () => {
    AllureReporter.addStep('write text into input field');
    await TextInputPage.writeText(text);
});

When('I click on the button', async () => {
    AllureReporter.addStep('click on updating button');
    await TextInputPage.clickOnButton();
});

Then('Button name should change', async () => {
    AllureReporter.addStep('Check button text');
    await Browser.addScreenshot();
    assert.strictEqual(await TextInputPage.getButtonText(), text);
});