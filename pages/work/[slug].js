import { DataStore } from "aws-amplify";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Header, Slider } from "../../models";

export async function getStaticProps({ params }) {
  const dataSlider = await DataStore.query(Slider, c => c.slug.eq(params.slug));
  const slider = await JSON.parse(JSON.stringify(dataSlider));
  const dataLink = await DataStore.query(Header);
  const header = await JSON.parse(JSON.stringify(dataLink));
  return {
    props: { header, slider },
  }
}

export async function getStaticPaths({ locales }) {
  let paths = null;
  const dataSlider = await DataStore.query(Slider);
  const slider = await JSON.parse(JSON.stringify(dataSlider));

  paths = slider.map((post) => (
    locales.map((locale) => ({
      params: { slug: post.slug },
      locale
    }))
  )
  ).flat()

  return {
    paths,
    fallback: false
  }
}

const WorkDetailPage = ({ slider, header }) => {
  const { locale } = useRouter();
  console.log(slider);
  return (
    <>
      <Navbar data={header[0]} />
      <div className="w-4/5 mx-auto mt-5 space-y-5">
        <h2 className="text-5xl font-bold capitalize">
          {slider[0].title[locale]}
        </h2>
        <div className="text-lg">
          <p className="text-slate-400 capitalize">{slider[0].subtitle}</p>
          <p>{slider[0].description[locale]}</p>
        </div>
        <div className="space-y-5">
          {
            slider[0].imageArray &&
            slider[0].imageArray.map((image) => (
              image.imageSrc.length > 1 ?
                <div className="h-96 flex justify-between items-center gap-5" key={image.title}>
                  {
                    image.imageSrc.map((item) => (
                      <figure className="w-full h-96 relative" key={image.title}>
                        <Image 
                          layout="fill"
                          alt={image.title}
                          src={item}
                        />
                      </figure>
                    ))
                  }
                </div> :
                <figure className="w-full h-96 relative" key={image.title}>
                  <Image 
                    layout="fill"
                    src={image.imageSrc[0]}
                    alt={image.title}
                    objectFit="contain"
                  />
                </figure>
            ))

          }
        </div>
      </div>
    </>
  );
}

export default WorkDetailPage;