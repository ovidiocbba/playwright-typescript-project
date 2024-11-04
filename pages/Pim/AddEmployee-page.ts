import { type Locator, type Page } from '@playwright/test';

export class AddEmployeePage {
  readonly page: Page;
  readonly firstNameTextField: Locator;
  readonly middleNameTextField: Locator;
  readonly lastNameTextField: Locator;
  readonly employeeIdTextField: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameTextField = page.locator('input[name=firstName]');
    this.middleNameTextField = page.locator('input[name=middleName]');
    this.lastNameTextField = page.locator('input[name=lastName]');
    this.employeeIdTextField = page.locator("//label[contains(text(), 'Employee Id')]/parent::div/following::div/input");
    this.saveButton = page.locator("//button[contains(normalize-space(.), 'Save')]");
  }

  async addEmployee(firstName: string, middleName:string , lastName: string, employeeId: string) {
    await this.firstNameTextField.fill(firstName); 
    await this.middleNameTextField.fill(middleName);
    await this.lastNameTextField.fill(lastName);
    await this.employeeIdTextField.fill(employeeId);
    await this.saveButton.click();
  }

  async verifyEmployeeCreation() {
    // Waits for the loading spinner to disappear before proceeding, ensuring the page has finished loading.
    await this.page.waitForSelector('div.oxd-loading-spinner', { state: 'hidden' });
    const personalDetailsLabel = 'h6:has-text("Personal Details")';
    await this.page.waitForSelector(personalDetailsLabel, { timeout: 5000 });
    return await this.page.isVisible(personalDetailsLabel);
  }
}
