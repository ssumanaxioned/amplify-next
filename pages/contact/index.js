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

const Contact =({ links })=> {
  return(
    <div>
      <Header data={links} />
      Contact
    </div>
  )
}

export default Contact;