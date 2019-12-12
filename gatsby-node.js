const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/person/)) {
    page.matchPath = "/person/*"
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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

  filmsResult.data.swapi.allFilms.forEach(({ id }) => {
    createPage({
      path: `/film/${id}`,
      component: path.resolve(`./src/templates/film.tsx`),
      context: { id },
    })
  });

}
