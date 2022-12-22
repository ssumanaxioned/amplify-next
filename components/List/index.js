import Link from "next/link";
import { useRouter } from "next/router";
import AmplifyImage from "../AmplifyImage";

const List = ({ data }) => {
  const { locale } = useRouter();
  return (
    <Link href={`${locale}/work/${data.slug}`}>
      <div className="basis-[calc(33.33%-1.25rem)] hover:-translate-y-1 transition-transform cursor-pointer">
        <figure className="w-full h-96 relative">
          <AmplifyImage data={data.image} />
        </figure>
        <p className="capitalize text-xl font-bold">{data.title}</p>
      </div>
    </Link>
  )
}

export default List;