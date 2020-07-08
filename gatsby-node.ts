import { resolve as pathResolve } from 'path';
import { GatsbyNode } from 'gatsby';
import { FilmIndexQuery, PersonIndexQuery } from './typings/graphql/build';

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
  const allFilms = await graphql<FilmIndexQuery>(`
    query FilmIndex {
      api {
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

  allFilms.data?.api.allFilms.forEach(({ id }) => {
    createPage<{ id: string }>({
      path: `/films/${id}`,
      component: pathResolve(`./src/templates/films-film.tsx`),
      context: {
        id,
      },
    });
  });

  // Create a page for each person result.
  const allPeople = await graphql<PersonIndexQuery>(`
    query PersonIndex {
      api {
        allPersons {
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

  allPeople.data?.api.allPersons.forEach(({ id }) => {
    createPage<{ id: string }>({
      path: `/characters/${id}`,
      component: pathResolve(`./src/templates/characters-character.tsx`),
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
