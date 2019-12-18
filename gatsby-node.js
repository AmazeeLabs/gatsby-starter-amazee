const path = require(`path`);
const {languages, defaultLanguage} = require('./languages');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage} = actions;
  deletePage(page);

  return new Promise(resolve => {
    Object.keys(languages).forEach( lang => {
      const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

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
    const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

    filmsResult.data.swapi.allFilms.forEach(({ id }) => {
      createPage({
        path: `/${languagePrefix}films/${id}`,
        component: path.resolve(`./src/templates/film.tsx`),
        context: {
          id,
          language: lang
        },
      })
    });

    createPage({
      path: `/${languagePrefix}persons/:id`,
      matchPath: `/${languagePrefix}persons/*`,
      component: path.resolve(`./src/templates/person.tsx`),
      context: {
        language: lang
      },
    })
  });
}
