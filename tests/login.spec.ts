import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login-page';
import Config from '../utils/Config';


test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  const config = Config.getInstance();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('@TC-001 Verify that a user can successfully log in with valid credentials', {
    tag: ['@Smoke', '@Functional' ,'@Regression'],
  }, async ({ page }) => {
    await loginPage.login(config.userName, config.password);
    await page.waitForURL(/\/dashboard/);
    // Expect to be redirected to dashboard.
    await expect(page).toHaveURL(/\/dashboard/);
  });
  test('@TC-002 Verify that a user receives an error message when attempting to log in with incorrect credentials', {
    tag: ['@Negative','@Regression'],
  }, async ({ page }) => {
    await loginPage.login(config.userName, 'wrongpass');
    const actualMessage = loginPage.alertContentLabel;
    const expectMessage = 'Invalid credentials';
    await expect(actualMessage).toHaveText(expectMessage);
  });
});
