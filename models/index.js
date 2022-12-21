// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PostDetail, Post, Assests, Link, Title } = initSchema(schema);

export {
  PostDetail,
  Post,
  Assests,
  Link,
  Title
};