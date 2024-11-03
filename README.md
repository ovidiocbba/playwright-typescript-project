# Trello Playwright Project
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
Run all tests with Chrome browser:
```bash
npm run test-ui-c
```
Run all tests with Firefox browser:
```bash
npm run test-ui-f
```
View Test Reports
```bash
npx playwright show-report
```

(Optional) Run Tests and Generate Allure Reports
1. Run tests with the Allure reporter:
```bash
npx playwright test --reporter=allure
```
2. Serve the Allure report:
```bash
allure generate ./allure-results -o ./allure-report --clean
```
