import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login-page';

const userName = process.env.UI_USERNAME!;
const password = process.env.UI_PASSWORD!;

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('@TC-001 Successful login', {
    tag: ['@Regression'],
  }, async ({ page }) => {
    await loginPage.login(userName, password);
    await page.waitForURL(/\/dashboard/);
    // Expect to be redirected to dashboard.
    await expect(page).toHaveURL(/\/dashboard/);
  });
  test('@TC-002 Failed Login with Incorrect Credentials', {
    tag: ['@Regression', '@Negative'],
  }, async ({ page }) => {
    await loginPage.login(userName, 'wrongpass');
    const actualMessage = loginPage.alertContentLabel;
    const expectMessage = 'Invalid credentials';
    await expect(actualMessage).toHaveText(expectMessage);
  });
});
