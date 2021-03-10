const resolvers = {
  Query: {
    user: (_, { id }) => db.users.find((u) => u.id === id),
    users: () => db.users,
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const user = { id: String(Date.now()), name, email };
      db.users.push(user);
      return user;
    },
  },
  User: {
    posts: (user) => db.posts.filter((p) => p.authorId === user.id),
  },
};
module.exports = resolvers;
