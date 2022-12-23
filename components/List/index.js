import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const List = ({ data }) => {
  const { locale } = useRouter();
  return (
    <Link href={`${locale}/work/${data.slug}`}>
      <div className="basis-[calc(33.33%-1.25rem)] hover:-translate-y-1 transition-transform cursor-pointer">
        <figure className="w-full h-96 relative">
          <Image 
            src={data.workImage}
            layout="fill"
            alt={data.title[locale]}
          />
        </figure>
        <p className="capitalize text-xl font-bold">{data.title[locale]}</p>
      </div>
    </Link>
  )
}

export default List;