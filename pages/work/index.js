import { DataStore } from "aws-amplify";
import List from "../../components/List";
import Navbar from "../../components/Navbar";
import { Header, Slider } from '../../models';

export async function getStaticProps() {
  const dataLink = await DataStore.query(Header);
  const header = await JSON.parse(JSON.stringify(dataLink));
  const dataSlider = await DataStore.query(Slider);
  const slider = await JSON.parse(JSON.stringify(dataSlider));
  return {
    props: { header, slider },
  }
}

const Work = ({ header, slider }) => {
  return (
    <>
      <Navbar data={header[0]} />
      <div className="w-4/5 mx-auto mt-5 space-y-10">
        <h2 className="font-bold text-6xl">Work</h2>
        <div className="flex justify-start items-start space-x-5">
          {
            slider &&
            slider.map((slide) => (
              <List key={slide.title} data={slide} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Work;