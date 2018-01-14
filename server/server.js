import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './graphql/schema';

const app = express();
const dev = process.env.NODE_ENV === 'development';

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: dev,
  }),
);

app.use('/', (req, res) => res.json('Use /graphql to query your data'));

const server = app.listen(3000, () => {
  const { port } = server.address();
  console.info(`\n\nServer listening at http://localhost:${port} \n`);
});
