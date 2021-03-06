# Environment configuration

Many parts of the application need different configuration based on what environment they are run in, e.g. local development can use mocked data sources while production cannot. These differences can be configured by setting environment variables. They have to be available to the Gatsby build process as well as the GraphQL API. For an up-to-date list of all available environment variables please refer to the `/.environments/*.env` files.

This application uses a single environment variable, `CURRENT_APP_ENV`, to control which sets of environment variables are loaded for a specific environment. All environments (e.g. Lagoon, Azure, etc.) are configured using those `.env` files and, by default, an environment will get the `local` configuration. To use a different `*.env` file, **non-local environments MUST define the `CURRENT_APP_ENV` environment variable for this configuration switching to work properly** (see below for details.)

## Loading and precedence

Environment variables are collected from multiple sources.

There is one special variable, called `CURRENT_APP_ENV`, that is used to indicate the current environment and control which of the environment-specific settings in `/.environments` are used. This variable defaults to `local`. Setting this variable in a `/.environments/*.env` file will have no effect, so environments should ensure the `CURRENT_APP_ENV` variable is set by other means.

- `/.env`: Environment variables needed only for your own local machine. This file, if needed, must be created manually and will be ignored by Git. An example of how to create a `.env` file is provided with `.env.example`; this example file is ignored by the environment loader.

  If any variables are written in both `.env` and `.environments/*.env` files, the value used in `.env` will take precedence.

- `/.environments/local.env`: Environment variables needed for your local machine that can be shared settings for all local developers.

- `/.environments/pullrequest.env`: Environment variables needed for feature branch environments created for GitHub pull requests.

- `/.environments/dev.env`: Environment variables neeeded for the shared development environment.

- `/.environments/prod.env`: Environment variables needed for the production environment.

Environment variables loaded from the above files will be available in JavaScript inside the `process.env` object.

## Secrets

If the system needs to communicate to external services, there may be a set of secrets (e.g. authentication tokens or SSH keys) that have to be defined **and not committed to Git**.

@TODO add list of secrets per application

### How to properly add a new secret to the application

As an example, let's say our app needs to have a secret access token to access SWAPI, that should not be committed to Git.

- For the repository, we need to add an example line to `.env.example` to make it known to developers, using a placeholder as a value.  
  E.g.

  ```shell
  SWAPI_ACCESS_TOKEN=use-your-personal-access-token-here
  ```

- The developers will need to get their own access token and add it to the `.env` file on their local machine.

- For all other environments (e.g. Travis CI, Lagoon environments), follow their documentation on how to add secret keys to their environments.

## Usage

@TODO explain different usages of the process.env object
