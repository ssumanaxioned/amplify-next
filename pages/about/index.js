import { DataStore } from "aws-amplify";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { About, Header, Pages, Work } from '../../models';

export async function getStaticProps({ params }) {
  const dataLink = await DataStore.query(Header);
  const header = await JSON.parse(JSON.stringify(dataLink));
  const dataPages = await DataStore.query(Pages, c => c.slug.eq('about'));
  const pages = await JSON.parse(JSON.stringify(dataPages));
  const dataWork = await DataStore.query(Work, c => c.pagesID.eq(pages[0].id));
  // const dataWork = await DataStore.query(Work);
  const work = await JSON.parse(JSON.stringify(dataWork));
  const dataAbout = await DataStore.query(About);
  const about = await JSON.parse(JSON.stringify(dataAbout));
  return {
    props: { header, work, pages, about },
  }
}

const AboutUs =({ header, work, pages, about })=> {
  console.log('work', work);
  console.log('pages', pages);
  console.log('about', about);
  return (
    <div>
      <Navbar data={header[0]} />
      About
    </div>
  )
}

export default AboutUs;