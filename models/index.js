// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pages, Work, About, Slider, Header, Title, Description, CTA, ImageArray, Locale, Links } = initSchema(schema);

export {
  Pages,
  Work,
  About,
  Slider,
  Header,
  Title,
  Description,
  CTA,
  ImageArray,
  Locale,
  Links
};