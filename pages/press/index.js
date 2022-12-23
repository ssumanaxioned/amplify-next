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

const Press=({ header })=> {
  return (
    <div>
      <Navbar data={header[0]} />
      Press   
    </div>
  )
}

export default Press;