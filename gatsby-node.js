const path = require(`path`);
const {languages, defaultLanguage} = require('./languages');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage} = actions
  deletePage(page);

  return new Promise(resolve => {
    Object.keys(languages).forEach( lang => {

      // TODO: Adjust client only paths.
      // Paths matching this pattern will be generated once and will load
      // information on the client.
      // https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/
      const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

      if (page.path.match(/^\/person/)) {
        page.matchPath = `/${languagePrefix}person/*`
      }

      return createPage({
        ...page,
        path: `/${languagePrefix}${page.path.substr(1)}`,
        context: {
          language: lang
        }
      });

    });
    resolve();
  });


}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // TODO: Adjust dynamically generated pages.
  // By querying the graphql source, gatsby is able to dynamically generate
  // pages that are pre-rendered on build.
  // https://www.gatsbyjs.org/tutorial/part-seven/
  const filmsResult = await graphql(`
    query {
      swapi {
        allFilms {
          id
        }
      }
    }
  `);

  if (filmsResult.errors) {
    throw filmsResult.errors
  }

  Object.keys(languages).forEach( lang => {
    filmsResult.data.swapi.allFilms.forEach(({ id }) => {
      const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;
      createPage({
        path: `/${languagePrefix}film/${id}`,
        component: path.resolve(`./src/templates/film.tsx`),
        context: {
          id,
          language: lang
        },
      })
    });
  });
}
