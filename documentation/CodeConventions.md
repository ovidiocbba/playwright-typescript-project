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

- In this project, we use **kebab-case** for **file** and **folder names** to ensure consistency and avoid any potential issues with case sensitivity across different file systems.
  **Example:**

```
login-page.ts
home-page.ts
user-details.spec.ts
```

## :card_file_box: 2. Project Organization

- The project files are organized logically. For example, the tests, pages, and utils directories are used to ensure the codebase is easy to navigate and maintain.
  **Example:**

```
/pages
  └── login-page.ts
/tests
/utils
  └── helper.ts
```

## :dromedary_camel: 3. Variable and Function Naming

- Our project follows the **camelCase naming convention** for **variables** and **functions**, with clear and descriptive names to make the code more readable.  
  **Example:**

```typescript
const loginButton = page.locator('#loginButton');

async function performLogin(username: string, password: string): Promise<void> {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await loginButton.click();
}
```

## :gear: 4. Class and Interface Naming

- We follow the **PascalCase** convention for naming **classes** and **interfaces**, ensuring that the class names clearly represent the entities or pages they model.  
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

## :lock: 5. Use of `const` and `let`

- In this project, we always use **const** for variables whose values do not change, and **let** for variables that are reassigned. We avoid using **var** altogether.
  **Example:**

```typescript
const maxAttempts = 3;
let currentAttempt = 0;
```

## :crystal_ball: 6. Avoid Magic Numbers

- This project avoids magic numbers (unnamed constants) by using well-named constants to make the code more readable and maintainable.  
  **Example:**

```typescript
const waitTime = 5000; // Define constant
await page.waitForTimeout(waitTime); // Use constant
```

<div align="right">
    <b><a href="https://github.com/ovidiocbba/playwright-typescript-project?tab=readme-ov-file#table-of-contents">↥ Back to main page</a></b>
</div>
