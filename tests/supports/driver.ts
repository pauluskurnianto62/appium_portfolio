import { remote } from 'webdriverio';

let driver: WebdriverIO.Browser;

export async function initDriver(): Promise<WebdriverIO.Browser> {
  driver = await remote({
    hostname: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities: {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android Emulator',
      'appium:appPackage': 'com.example.todo',
      'appium:appActivity': '.MainActivity',
    },
  });

  return driver;
}

export function getDriver(): WebdriverIO.Browser {
  return driver;
}

export async function closeDriver() {
  if (driver) {
    await driver.deleteSession();
  }
}