import Head from 'next/head'
import { DataStore } from "aws-amplify";
import { Header, Slider } from '../models';
import Navbar from '../components/Navbar';
import BannerSlider from '../components/BannerSlider';

export async function getStaticProps() {
  const dataLink = await DataStore.query(Header);
  const header = await JSON.parse(JSON.stringify(dataLink));
  const dataSlider = await DataStore.query(Slider);
  const slider = await JSON.parse(JSON.stringify(dataSlider));
  return {
    props: { header, slider },
  }
}

export default function Home({ header, slider }) {
  return (
    <div>
      <Head>
        <title>Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar data={header[0]} />
      <BannerSlider data={slider} />
    </div>
  )
}
