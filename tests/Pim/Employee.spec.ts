import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/Login-page';
import { DashboardPage} from '../../pages/Dashboard-page';
import { EmployeeListPage } from '../../pages/Pim/EmployeeList-page';
import { AddEmployeePage } from '../../pages/Pim/AddEmployee-page';
import { GuidGenerator } from '../../utils/GuidGenerator'; 

const userName = process.env.UI_USERNAME!;
const password = process.env.UI_PASSWORD!;

test.describe('PIM', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let employeeListPage: EmployeeListPage;
  let addEmployeePage: AddEmployeePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    employeeListPage = new EmployeeListPage(page);
    addEmployeePage = new AddEmployeePage(page);

    await loginPage.goto();
    await loginPage.login(userName, password);

    // Navigate to PIM module
    await dashboardPage.clickPimMenuItem();
  });

  test('@TC-0001 Verify that an employee can be created', {
    tag: ['@Smoke', '@Functional', '@Regression'],
  }, async () => {
    await employeeListPage.clickAddButton();

    const guid = GuidGenerator.generateNumericGuid(10);
    await addEmployeePage.addEmployee('Mary', 'Elizabeth', 'Smith', guid);

    const isEmployeeCreated = await addEmployeePage.verifyEmployeeCreation();
    expect(isEmployeeCreated).toBeTruthy();
  });

  test('@TC-0002 Verify that an employee cannot be created when required fields are left empty', {
    tag: ['@Negative', '@Regression'],
  }, async () => {

    await employeeListPage.clickAddButton();

    await addEmployeePage.addEmployee('', '', '', '');

    const areErrorsVisible = await addEmployeePage.verifyRequiredFields();
    expect(areErrorsVisible).toBeTruthy();
  });
});
