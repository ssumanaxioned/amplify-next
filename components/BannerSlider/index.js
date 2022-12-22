import Image from "next/image";
import { useRouter } from "next/router";
import AmplifyVideo from "../AmplifyVideo";

const BannerSlider = ({ data }) => {
  console.log(data);
  const { locale } = useRouter();
  return (
    data.map((item) => (
      <div key={item.id} className="relative">
        <div className="w-full h-screen relative">
          {
            item.imageSrc &&
            <Image
              layout="fill"
              src={item.imageSrc}
              alt={item.title[locale]}
            />
          }
          {
            item.videoSrc && 
            <AmplifyVideo
              data={item.videoSrc}
            />
          }
        </div>
        <div className="w-4/5 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="font-bold text-8xl text-white">{item.title[locale]}</h2>
          <p className="font-semibold text-xl text-white">{item.description[locale]}</p>
          <a className="inline-block px-8 py-5 rounded-full bg-[#f54336] font-bold text-2xl text-white hover:bg-white hover:text-[#f54336] transition-colors" href={item.ctaUrl}>{item.cta[locale]}</a>
        </div>
      </div>
    ))
  )
}

export default BannerSlider;