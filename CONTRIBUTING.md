# Contributing Guidelines

Thank you for considering contributing to our "@bitfiber/rx" library!
We welcome contributions from the community to help improve and expand the functionality of our library.
By contributing, you can help make our library more useful for developers across different projects and domains.

## Code of Conduct

Before getting started, please review
our [Code of Conduct](https://github.com/bitfiber/rx/blob/main/CODE_OF_CONDUCT.md) to understand the behavior that is
expected of all contributors.

## Getting Started

To contribute to our "@bitfiber/rx" library, follow these steps:

1. Fork the [GitHub Repository](https://github.com/bitfiber/rx) to your own GitHub account.

2. Clone the forked repository to your local machine.

3. Create a new branch,
   see [guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).  
   Branch naming conventions:

- For features: `feature/<your-feature-branch-name>`
- For bug fixes: `fix/<your-bugfix-branch-name>`.
- For tests: `tests/<your-tests-branch-name>`.
- For docs: `docs/<your-docs-branch-name>`.
- For refactoring: `refactor/<your-refactoring-branch-name>`
- For performance improving: `perf/<your-performance-branch-name>`

4. Switch to the newly created branch.

5. Go into repository folder by running:

    ```bash
    cd rx
    ```
6. Install Node.js using nvm:  
   `<version>` - take the Node.js version
   from [nx node versions](https://nx.dev/nx-api/workspace/documents/nx-nodejs-typescript-version-matrix) considering
   the nx version in package.json

    ```bash
    nvm install <version>
    nvm use <version>
    ```

7. Install nx globally:  
   `<version>` - version as in package.json

    ```bash
    npm add --global nx@<version>
    ```

8. Install dependencies by running:

   ```bash
   npm install
   ```

9. Make your changes, following the guidelines and best practices outlined below.

10. Run tests to ensure that your changes haven't introduced any regressions by running:

    ```bash
    nx test rx
    ```

11. Ensure your code adheres to the style guidelines by running ESLint:

    ```bash
    nx lint rx
    ```

12. Push your changes to your forked repository.

13. Submit a pull request (PR) to the [repository`s main branch](https://github.com/bitfiber/rx/tree/main),
    explaining the purpose and scope of your changes.

## Guidelines and Best Practices

To ensure that your contributions are accepted and integrated smoothly, please adhere to the following guidelines and
best practices:

* **Follow the Style Guide
  **: Maintain consistency with the existing codebase by following our eslint coding style.

* **Write Tests
  **: Ensure that your changes are covered by tests. Write unit tests for new functionality and update
  existing tests for changes to ensure full test coverage.

* **Document Changes
  **: Provide clear and concise documentation for any new functionality or changes made to existing
  functionality. This includes updating README.md, adding JSDoc comments, and any other relevant documentation.

* **Keep PRs Small and Focused
  **: Submit separate PRs for each logical change or set of related changes. This makes it
  easier to review and merge your contributions.

* **Be Responsive
  **: Be responsive to feedback and comments on your PRs. Address any review comments promptly and make
  necessary adjustments to your code.

* **Respect Licensing
  **: Ensure that your contributions adhere to the licensing terms of the project. If you're
  introducing dependencies with different licenses, make sure they are compatible with our project's license.

## Need Help?

If you need any assistance or have questions about contributing, feel free to reach out to us
via [our community discussion forum](https://github.com/bitfiber/rx/discussions). We're here to help!

Thank you for your interest in contributing to our "@bitfiber/rx" library.
We appreciate your support and look forward to your contributions!
