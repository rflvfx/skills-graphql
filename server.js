const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Query { hello: String, users: [User] }
  type User { id: ID, nome: String }
`;
const resolvers = {
  Query: { hello: () => 'Ola GraphQL', users: () => [{ id: 1, nome: 'Rafael' }] }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Servidor em ${url}`));
