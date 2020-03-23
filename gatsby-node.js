const path = require(`path`);
const { languages, defaultLanguage } = require('./src/utils/languages');

// FIXME: Move language iteration into a gatsby plugin.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  return new Promise(resolve => {
    Object.keys(languages).forEach(lang => {
      const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

      return createPage({
        ...page,
        path: `/${languagePrefix}${page.path.substr(1)}`,
        context: {
          language: lang,
        },
      });
    });
    resolve();
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
    throw filmsResult.errors;
  }

  // FIXME: Move language iteration into a gatsby plugin.
  Object.keys(languages).forEach(lang => {
    const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

    // Create a page for each film result row.
    filmsResult.data.swapi.allFilms.forEach(({ id }) => {
      createPage({
        path: `/${languagePrefix}films/${id}`,
        component: path.resolve(`./src/templates/film.tsx`),
        context: {
          id,
          language: lang,
        },
      });
    });

    // TODO: Create virtual pages for client only routes.
    // Create a virtual page for the dynamic person template.
    createPage({
      // Every page has to have a path, even if in this case it is not used.
      path: `/${languagePrefix}persons/:id`,
      // Define a pattern that will trigger this template.
      matchPath: `/${languagePrefix}persons/*`,
      // Reference the page template to be used.
      component: path.resolve(`./src/templates/person.tsx`),
      context: {
        language: lang,
      },
    });
  });
};
