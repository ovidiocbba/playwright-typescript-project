import { type Locator, type Page } from '@playwright/test';

export class AddEmployeePage {
  readonly page: Page;
  readonly firstNameTextField: Locator;
  readonly middleNameTextField: Locator;
  readonly lastNameTextField: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameTextField = page.locator('input[name=firstName]');
    this.middleNameTextField = page.locator('input[name=middleName]');
    this.lastNameTextField = page.locator('input[name=lastName]');
    this.saveButton = page.locator("//button[contains(normalize-space(.), 'Save')]");
  }

  async addEmployee(firstName: string, middleName:string , lastName: string) {
    await this.firstNameTextField.fill(firstName); 
    await this.middleNameTextField.fill(middleName);
    await this.lastNameTextField.fill(lastName);
    await this.saveButton.click();
  }

  async verifyEmployeeCreation() {
    // Waits for the loading spinner to disappear before proceeding, ensuring the page has finished loading.
    await this.page.waitForSelector('div.oxd-loading-spinner', { state: 'hidden' });
    return await this.page.isVisible('h6:has-text("Personal Details")');
  }
}
