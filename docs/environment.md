# Environment configuration

All parts of the application can be configured by setting environment variables. They have to be available to the Gatsby build process as well as the GraphQL API (Function App). For an up-to-date list of all available environment variables please refer to [.env.example](../.env.example).

Local and Lagoon environments are configured automatically.

## Loading and precedence

There is one special variable called `NODE_ENV` that is used to indicate the current environment and control aggregation of additional environment specific settings. Based on that, environment values are collected from multiple sources (lower in the list wins):

- `.env.example`: The local development defaults.
- `.env`: Local development overrides.
- `.environments/[NODE_ENV].env`: Settings specific to different deployment environments (e.g. DEV, PROD).
- `process.env`: Any variables injected at runtime. Used for all secrets that should not be committed to Git.

## Secrets

There is a set of secrets that have to be defined **and not committed** if the system should talk to real external services:

@TODO add per application

## Usage

@TODO explain different usages of the process.env object: within Gatsby, loading in src/utils/config.ts
