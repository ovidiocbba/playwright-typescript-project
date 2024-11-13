# :scroll: Code Conventions

Here are some code conventions used for this project.

# Table of contents

- [:file_folder: 1. File Naming](#file_folder-1-file-naming)
- [:card_file_box: 2. Project Organization](#card_file_box-2-project-organization)
- [:dromedary_camel: 3. Variable and Function Naming](#dromedary_camel-3-variable-and-function-naming)
- [:gear: 4. Class and Interface Naming](#gear-4-class-and-interface-naming)
- [:lock: 5. Use of `const` and `let`](#lock-5-use-of-const-and-let)
- [:crystal_ball: 6. Avoid Magic Numbers](#crystal_ball-6-avoid-magic-numbers)

## :file_folder: 1. File Naming

In this project, we use **kebab-case** for **file** and **folder names** to ensure consistency and avoid any potential issues with case sensitivity across different file systems.  

**Example:**

```
login-page.ts
home-page.ts
user-details.spec.ts
```
<div align="right">
    <b><a href="#table-of-contents">↥ Back to top</a></b>
</div>

## :card_file_box: 2. Project Organization

The project files are organized logically. For example, the tests, pages, and utils directories are used to ensure the codebase is easy to navigate and maintain.  

**Example:**

```
/pages
  └── login-page.ts
/tests
/utils
  └── helper.ts
```

<div align="right">
    <b><a href="#table-of-contents">↥ Back to top</a></b>
</div>

## :dromedary_camel: 3. Variable and Function Naming

Our project follows the **camelCase naming convention** for **variables** and **functions**, with clear and descriptive names to make the code more readable.  

**Example:**

```typescript
const loginButton = page.locator('#loginButton');

async function performLogin(username: string, password: string): Promise<void> {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await loginButton.click();
}
```
<div align="right">
    <b><a href="#table-of-contents">↥ Back to top</a></b>
</div>


## :gear: 4. Class and Interface Naming

We follow the **PascalCase** convention for naming **classes** and **interfaces**, ensuring that the class names clearly represent the entities or pages they model.  

**Example:**

```typescript
class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginButton');
  }
}
```
<div align="right">
    <b><a href="#table-of-contents">↥ Back to top</a></b>
</div>


## :lock: 5. Use of `const` and `let`

In this project, we always use `const` for variables whose values do not change, and `let` for variables that are reassigned. We don't use `var` because it can cause confusing behavior.

  - **const**: Use this when the value stays the same after being assigned (e.g., settings, constants, or dynamically generated values that don't change).
  - **let**: Use this when the value may change during execution.

  Additionally:

  - For constants, we follow the **SCREAMING_SNAKE_CASE** naming convention (**uppercase with underscores**).
  - For variables that can change, we use **camelCase** naming convention.

**Example:**

```typescript
const API_TIMEOUT = 5000; // Constant: timeout in milliseconds.
let retries = 0; // Variable: will be reassigned during execution.

while (retries < 3) {
  try {
    await fetchData();
    break;
  } catch (error) {
    retries++;
  }
}
```

**Examples of `const` Usage**:

#### 1. Fixed constant:

```typescript
const GUID_LENGTH = 10;
```

#### 2. Dynamically generated but unchanging value:

```typescript
const guid = GuidGenerator.generateNumericGuid(GUID_LENGTH); // GUID is generated but won't be reassigned.
await addEmployeePage.addEmployee('Mary', 'Elizabeth', 'Smith', guid);
```

#### 3. Function result:

```typescript
const isEmployeeCreated = await addEmployeePage.verifyEmployeeCreation(); // The result won't change after assignment.
```

<div align="right">
    <b><a href="#table-of-contents">↥ Back to top</a></b>
</div>


## :crystal_ball: 6. Avoid Magic Numbers

This project avoids magic numbers (unnamed constants) by using well-named constants to make the code more readable and maintainable.  

**Example:**
#### Bad Example (Magic Number):
```typescript
const discount = price * 0.15;  // What does 0.15 represent?
```
In this case, it's unclear what 0.15 represents. Someone reading the code might not immediately know that it's a 15% discount.
#### Good Example (Avoid Magic Number):
```typescript
const DISCOUNT_RATE = 0.15;  // 15% discount rate.
const discount = price * DISCOUNT_RATE;
```
By defining `DISCOUNT_RATE` as a constant, it’s now clear that 0.15 represents a 15% discount, making the code easier to read and maintain.

<div align="right">
    <b><a href="https://github.com/ovidiocbba/playwright-typescript-project?tab=readme-ov-file#table-of-contents">↥ Back to main page</a></b>
</div>
