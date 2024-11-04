import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/Login-page';
import { DashboardPage} from '../../pages/Dashboard-page';
import { EmployeeListPage } from '../../pages/Pim/EmployeeList-page';
import { AddEmployeePage } from '../../pages/Pim/AddEmployee-page';
import { GuidGenerator } from '../../utils/GuidGenerator'; 

const userName = process.env.UI_USERNAME!;
const password = process.env.UI_PASSWORD!;

test('@TC-0001 Verify that a employee can be created', {
    tag: ['@Smoke', '@Functional'],
  }, async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const employeeListPage = new EmployeeListPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  await loginPage.goto();
  await loginPage.login(userName, password);

  await dashboardPage.clickPimMenuItem();

  await employeeListPage.clickAddButton();

  const guid = GuidGenerator.generateNumericGuid(10); // Generate the GUID with the specified
  await addEmployeePage.addEmployee('Mary', 'Elizabeth','Smith', guid);

  const isEmployeeCreated = await addEmployeePage.verifyEmployeeCreation();
  expect(isEmployeeCreated).toBeTruthy();
});
