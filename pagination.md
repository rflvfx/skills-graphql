# GraphQL Pagination

- Cursor-based (Relay connections): edges { node, cursor }, pageInfo { hasNextPage }
- first/after args on forward pagination
- Never expose raw OFFSET to clients on large sets
