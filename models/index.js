// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Link, Title, Post } = initSchema(schema);

export {
  Link,
  Title,
  Post
};