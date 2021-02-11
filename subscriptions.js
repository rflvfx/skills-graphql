const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const resolvers = {
  Subscription: {
    userCreated: { subscribe: () => pubsub.asyncIterator(["USER_CREATED"]) },
  },
};
module.exports = { pubsub, resolvers };
