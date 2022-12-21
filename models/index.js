// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Slider, PostDetail, Post, Assests, Link, Title, Slides } = initSchema(schema);

export {
  Slider,
  PostDetail,
  Post,
  Assests,
  Link,
  Title,
  Slides
};