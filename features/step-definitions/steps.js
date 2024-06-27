const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the saucedemo login page$/, async () => {
    await browser.url('https://www.saucedemo.com/');
});

When(/^I login with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue(username);
    await passwordInput.setValue(password);
    await loginButton.click();
});

Then(/^I should see the products page$/, async () => {
    await expect(browser).toHaveUrlContaining('inventory.html');
});

Then(/^I should see the product "([^"]*)" in the inventory$/, async (productName) => {
    const product = await $(`//*[contains(text(), '${productName}')]`);
    await expect(product).toBeExisting();
});
