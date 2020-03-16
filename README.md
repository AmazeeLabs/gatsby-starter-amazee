# Amazee Gatsby Starter

Kick off your Amazee project with this boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## Features

- Storybook
- Typescript
- PostCSS with `postcss-preset-env`
- CSS Modules
- TailwindCSS + PurgeCSS
- Unit tests with jest
- Integration tests with Cypress
- Mocking of GraphQL API's with Apollo
- Multilingual interfaces with i18next

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli) to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the Amazee starter
    gatsby new my-project https://github.com/AmazeeLabs/gatsby-starter-amazee
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    yarn mocks &
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

1.  **Review the TODO's:**

    After creation the project is full of `TODO` comments that will lead you to different parts that can/have to be
    modified and also point you to external documentation on these.

## Package commands overview

- `yarn mocks`: Start the mocked GraphQL mocked services for local development.
- `yarn build`: Build the production web application package.
- `yarn serve`: Locally serve the web application package.
- `yarn develop`: Run the live-refreshing development host.
- `yarn jest`: Run all jest unit tests.
- `yarn cypress:run:api`: Run all tests that target the API (requires `yarn mocks` and `yarn develop` to be already running).
- `yarn cypress:test`: Run all Cypress tests (requires `yarn mocks` and `yarn develop` to be already running).
- `yarn lint`: Run eslint checks.
- `yarn typecheck`: Run TypeScript checks.
- `yarn format:check`: Run code formatting checks.
- `yarn storybook`: Run storybook development server to work on components.
- `yarn tailwind`: (Re-)build a local version of the full tailwind stylesheet for development reference.
