import {  Given, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import Browser from '../../framework/browser/Browser.js';
import { downloadDir } from '../../framework/configs/main.wdio.conf.js';
import * as path from 'path';
import AllureReporter from '@wdio/allure-reporter';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';

Given('I am on the main page', async () => {
    AllureReporter.addStep('I am on the main page');
    await Browser.openUrl(mainConfig.baseUrl);
});
