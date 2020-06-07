import { ApolloServer } from 'apollo-server';
import { typeDefs, mockResolvers } from './schema';

new ApolloServer({
  typeDefs,
  mocks: mockResolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
})
  .listen({ port: 4001 })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
    return;
  })
  .catch((reason) => {
    console.error(reason);
  });
