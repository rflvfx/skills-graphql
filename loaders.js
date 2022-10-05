// DataLoader to batch N+1 queries
const DataLoader = require("dataloader");

const postLoader = new DataLoader(async (authorIds) => {
  const posts = await db.posts.findMany({ authorId: authorIds });
  return authorIds.map((id) => posts.filter((p) => p.authorId === id));
});
module.exports = { postLoader };
