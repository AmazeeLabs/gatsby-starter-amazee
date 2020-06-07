import { resolve as pathResolve } from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // By querying the GraphQL source, Gatsby is able to generate static pages
  // whose URLs are dynamically determined at build time.
  // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/

  // Create a page for each film result.
  const filmsResult: {
    data?: { swapi: { allFilms: { id: string }[] } };
    errors?: any;
  } = await graphql(`
    query {
      swapi {
        allFilms {
          id
        }
      }
    }
  `);

  if (filmsResult.errors) {
    reporter.panicOnBuild(
      `Error while running allFilms GraphQL query in gatsby-node.`,
      filmsResult.errors,
    );
    return;
  }

  filmsResult.data?.swapi.allFilms.forEach(({ id }) => {
    createPage<{ id: string }>({
      path: `/films/${id}`,
      component: pathResolve(`./src/templates/film.tsx`),
      context: {
        id,
      },
    });
  });

  // Create a page for each person result.
  const personsResult: {
    data?: { swapi: { allPersons: { id: string }[] } };
    errors?: any;
  } = await graphql(`
    query {
      swapi {
        allPersons {
          id
        }
      }
    }
  `);

  if (personsResult.errors) {
    reporter.panicOnBuild(
      `Error while running allPersons GraphQL query in gatsby-node.`,
      personsResult.errors,
    );
    return;
  }

  personsResult.data?.swapi.allPersons.forEach(({ id }) => {
    createPage<{ id: string }>({
      path: `/persons/${id}`,
      component: pathResolve(`./src/templates/person.tsx`),
      context: {
        id,
      },
    });
  });
};

// WARNING: Pages programmatically created in gatsby-node will not trigger
// onCreatePage events that are handled in this same page.
// @see https://github.com/gatsbyjs/gatsby/issues/5255
//
// The work-around is to create a local plugin with its own onCreatePage.
// @see https://www.gatsbyjs.org/docs/creating-a-local-plugin/
//
// i.e. This won't work _here_.
// export const onCreatePage: GatsbyNode['onCreatePage'] = () => {};
