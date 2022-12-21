import Image from "next/image"

const BannerSlider = ({ data }) => {
  return (
    data[0].slide.map((item) => (
      <div key={item.title} className="relative">
        <div className="w-full h-screen relative">
          <Image
            layout="fill"
            src={item.src}
            alt={item.title}
          />
        </div>
        <div className="w-4/5 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="font-bold text-8xl text-white">{item.title}</h2>
          <p className="font-semibold text-xl text-white">{item.description}</p>
          <a className="inline-block px-8 py-5 rounded-full bg-[#f54336] font-bold text-2xl text-white hover:bg-white hover:text-[#f54336] transition-colors" href={item.ctaUrl}>{item.ctaText}</a>
        </div>
      </div>
    ))
  )
}

export default BannerSlider;