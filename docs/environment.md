# Environment configuration

All parts of the application can be configured by setting environment variables. They have to be available to the Gatsby build process as well as the GraphQL API (Function App). For an up-to-date list of all available environment variables please refer to [.env.example](../.env.example).

Local and Lagoon environments are configured automatically.

## Loading and precedence

There is one special variable called `PROJECT_ENV` that is used to indicate the current environment and control aggregation of additional environment specific settings. Based on that, environment values are collected from multiple sources (lower in the list wins):

- `.env.example`: The local development defaults. This file is not loaded in the configuration, and serves as an example to create `.env` file
- `.environments/[PROJECT_ENV].env`: Settings specific to different deployment environments (e.g. local, dev, prod).
- `.env`: Local development overrides. (ignored for git)
- `process.env` variable: Has any variables injected at runtime. Used for all secrets that should not be committed to Git.

## Secrets

There is a set of secrets that have to be defined **and not committed** if the system should talk to real external services:

@TODO add list of secrets per application

### How to properly add a new secret to the application

As an example, our app needs to have a secret access token to access SWAPI, that should not be commited.

- For the repository, we need to add an example line to `.env.example` to make it known to developers, using a placeholder as a value.  
  E.g.

```
SWAPI_ACCESS_TOKEN=replaceme
```

- The developers will need to get the real key and add it to their own local `.env` (which is ignored on git)

- Make sure all other environments have the key added. (e.g. travis-ci, lagoon, prod, dev)

## Usage

@TODO explain different usages of the process.env object
