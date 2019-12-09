import {ApolloServer, gql} from 'apollo-server';

(new ApolloServer({
  typeDefs: gql`
    type Query {
      allFilms: [Film]
    }
    type Film {
      title: String!
    }
  `,
  mocks: <any>{
    Query : () => ({
      allFilms: () => [
        {title: 'A new hope'},
        {title: 'The empire strikes back'},
        {title: 'The return of the jedi'},
      ]
    }),
  },
})).listen({port: 4000}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
