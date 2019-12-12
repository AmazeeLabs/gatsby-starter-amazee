const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
  // TODO: Adjust client only paths.
  // Paths matching this pattern will be generated once and will load
  // information on the client.
  // https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/
  const { createPage } = actions
  if (page.path.match(/^\/person/)) {
    page.matchPath = "/person/*"
    createPage(page)
  }
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

  filmsResult.data.swapi.allFilms.forEach(({ id }) => {
    createPage({
      path: `/film/${id}`,
      component: path.resolve(`./src/templates/film.tsx`),
      context: { id },
    })
  });

}
