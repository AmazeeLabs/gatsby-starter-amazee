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
  const allFilms: {
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

  if (allFilms.errors) {
    reporter.panicOnBuild(
      `Error while running allFilms GraphQL query in gatsby-node.`,
      allFilms.errors,
    );
    return;
  }

  allFilms.data?.swapi.allFilms.forEach(({ id }) => {
    createPage<{ id: string }>({
      path: `/films/${id}`,
      component: pathResolve(`./src/templates/film.tsx`),
      context: {
        id,
      },
    });
  });

  // Create a page for each person result.
  const allPeople: {
    data?: { swapi: { allPeople: { id: string }[] } };
    errors?: any;
  } = await graphql(`
    query {
      swapi {
        allPeople {
          id
        }
      }
    }
  `);

  if (allPeople.errors) {
    reporter.panicOnBuild(
      `Error while running allPeople GraphQL query in gatsby-node.`,
      allPeople.errors,
    );
    return;
  }

  allPeople.data?.swapi.allPeople.forEach(({ id }) => {
    createPage<{ id: string }>({
      path: `/characters/${id}`,
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
