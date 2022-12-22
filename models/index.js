// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Work, Slider, Header, ImageArray, Title, Description, CTA, Locale, Links } = initSchema(schema);

export {
  Work,
  Slider,
  Header,
  ImageArray,
  Title,
  Description,
  CTA,
  Locale,
  Links
};