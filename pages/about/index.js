import { DataStore } from "aws-amplify";
import Navbar from "../../components/Navbar";
import { Header } from '../../models';

export async function getStaticProps() {
  const dataLink = await DataStore.query(Header);
  const header = await JSON.parse(JSON.stringify(dataLink));
  return {
    props: { header },
  }
}

const About =({ header })=> {
  return (
    <div>
      <Navbar data={header[0]} />
      About
    </div>
  )
}

export default About;