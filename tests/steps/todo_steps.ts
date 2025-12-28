import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import TodoPage from '../pages/TodoPage';
import { getDriver } from '../supports/driver';

/* ========= BACKGROUND ========= */

Given('I am on main menu', async () => {
  const driver = getDriver();

  await driver.startActivity(
    'com.paulus.todoapp',
    'com.paulus.todoapp.ui.MainActivity'
  );

  await expect(await driver.$('~mainMenu')).toBeDisplayed();
});

/* ========= ADD TODO ========= */

Given('I am on new todo page', async () => {
  await TodoPage.goToAddTodo();
});

Given('I fill all blanks', async () => {
  await TodoPage.fillTodo('Beli nasi goreng', '2 porsi');
  await TodoPage.selectHighPriority();
});

When('I click add', async () => {
  await TodoPage.submit();
});

Then('Todo list should be added in main menu', async () => {
  const toast = await $('//*[@text="Data added"]');
  await expect(toast).toBeDisplayed();
});

/* ========= EDIT TODO ========= */

Given('I am on edit todo page with title {string}', async (title: string) => {
  await TodoPage.editTodo(title);
});

Given('I change fills', async () => {
  await TodoPage.fillTodo('Beli mie goreng', '3 porsi');
  await TodoPage.selectLowPriority();
});

When('I click edit', async () => {
  await TodoPage.submit();
});

Then('Todo list should be changed in main menu', async () => {
  const toast = await $('//*[@text="Todo Updated"]');
  await expect(toast).toBeDisplayed();
});

/* ========= REMOVE TODO ========= */

When('I click checked with title {string}', async (title: string) => {
  await TodoPage.checkTodo(title);
});

Then('todo list with title {string} should be removed in main menu', async (title: string) => {
  const exists = await TodoPage.isTodoExist(title);
  await expect(exists).toBe(false);
});