import { DataStore } from "aws-amplify";
import Header from "../../components/Header";
import { Link } from "../../models";

export async function getStaticProps() {
  const dataLink = await DataStore.query(Link);
  const links = await JSON.parse(JSON.stringify(dataLink));
  return {
    props: { links },
  }
}

const About =({ links })=> {
  return(
    <div>
      <Header data={links} />
      About
    </div>
  )
}

export default About;