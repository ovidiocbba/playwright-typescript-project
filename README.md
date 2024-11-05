# Playwright with TypeScript Project
This project uses [Playwright](https://playwright.dev/docs/intro) and [TypeScript](https://www.typescriptlang.org/) for end-to-end testing.

[allure_report]: https://ovidiocbba.github.io/playwright-typescript-project

[![CI](https://github.com/ovidiocbba/playwright-typescript-project/actions/workflows/ci.yml/badge.svg)](https://github.com/ovidiocbba/playwright-typescript-project/actions/workflows/ci.yml)  
[![Execution](https://github.com/ovidiocbba/playwright-typescript-project/actions/workflows/execution.yml/badge.svg)](https://github.com/ovidiocbba/playwright-typescript-project/actions/workflows/execution.yml)  
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ovidiocbba_playwright-typescript-project&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ovidiocbba_playwright-typescript-project)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ovidiocbba_playwright-typescript-project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ovidiocbba_playwright-typescript-project)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ovidiocbba_playwright-typescript-project&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ovidiocbba_playwright-typescript-project)  
[View Allure Report][allure_report]

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### 1. Node.js
1. Ensure you have [Node.js](https://nodejs.org/en) installed (version 14 or higher).
2. Verify the installation by running the following commands in your terminal:
```sh
npm -v
```
#### 2. Git
1. Please download Git: https://git-scm.com/downloads
2. Choose the version for your operating system. 
3. Accept the defaults and follow the screen instructions to install Git.

#### 3. Visual Studio Code
1. Please download Visual Studio Code: https://code.visualstudio.com/
2. Choose your operating system (Windows, macOS, or Linux).
3. Install the following **extensions** for Visual Studio Code:
   - **Playwright Test for VSCode**  
   *Provides integration with Playwright for running, debugging, and managing tests directly within Visual Studio Code.*

   - **YAML**  
   *Offers syntax highlighting, validation, and autocompletion for YAML files, which are commonly used for configuration files in CI/CD pipelines.*

### Configuring Environment
#### 1. Clone remote repository

##### Step1 Generate SSH Keys
- Open "Git Bash" (This is installed when you install Git).
- Enter the following command : 
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

##### Step2 Clone the repository
- By git command line :
```sh
git clone git@github.com:ovidiocbba/playwright-typescript-project.git
```
#### 2. Install Dependencies
Install all the required dependencies using npm. This will install Playwright, TypeScript, and other packages defined in the `package.json` file.

```bash
npm install
```

### Running the tests

**IMPORTANT:** Please add the appropriate values for your `.env` file. 
For example: `ENV='test'`

Run all tests in headless mode (without a browser window):
```bash
npx playwright test
```
Run a test case using a tag
```bash
npx playwright test --grep '@TC-0001' --project=chromium --headed
```
View Test Reports
```bash
npx playwright show-report
```

## Test Commands
Run all tests with Chrome browser:
```bash
npm run test:ui:chrome
```
Run all tests with Chrome browser in headless mode:
```bash
npm run test:ui:chrome:headless
```
Run all tests with Firefox browser:
```bash
npm run test:ui:firefox
```
Run all tests with Firefox browser in headless mode:
```bash
npm run test:ui:firefox:headless
```
Runs the tests using the Allure reporter and generates the corresponding report.
```bash
npm run test:ui:allure
```

### Run Tests and Generate Allure Reports
1. Run tests with the Allure reporter:
```bash
npx playwright test --reporter=allure-playwright
```
2. Serve the Allure report:
```bash
allure generate ./allure-results -o ./allure-report --clean
```
3. Open Allure Report:
```bash
allure open ./allure-report
```

# Test cases
List of test cases implemented in the Framework.
<table>
  <tr>
    <th>Test case</th>
    <th>Title</th>
    <th>Area</th>
    <th>Tag</th>
  </tr>
  <tr>
    <td><b>0001</b></td>
    <td>Verify that a user can successfully log in with valid credentials</td>
    <td><code>login</code></td>
    <td align = 'center'><code> smoke, functional</code></td>
  </tr>
  <tr>
    <td><b>0002</b></td>
    <td>Verify that a user receives an error message when attempting to log in with incorrect credentials</td>
    <td><code>login</code></td>
    <td align = 'center'><code>negative</code></td>
  </tr>
  <tr>
    <td><b>0003</b></td>
    <td>Verify that an employee can be created</td>
    <td><code>pim</code></td>
    <td align = 'center'><code>smoke, functional</code></td>
  </tr>
  <tr>
    <td><b>0004</b></td>
    <td>Verify that an employee cannot be created when required fields are left empty</td>
    <td><code>pim</code></td>
    <td align = 'center'><code>negative</code></td>
  </tr>
  <!--Footer section-->
  <tr>
    <td align = 'center' colspan="3"><b>Total</b></td>
    <td align = 'center'>4</td>
  </tr>
</table>