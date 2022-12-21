import { Storage } from "aws-amplify";
import Image from "next/image";
import { useEffect, useState } from "react";

const List = ({ data }) => {
  const [image, setImage] = useState("");

  const getImage = async () => {
    const key = await Storage.get(data.image, {
      level: 'public'
    })
    setImage(key)
  }

  useEffect(() => {
    getImage();
  }, [])

  return (
    <div className="basis-[calc(33.33%-1.25rem)]">
      <figure className="w-full h-96 relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt={data.title}
        />
      </figure>
      <p className="capitalize">{data.title}</p>
      <p className="capitalize">description: {data.description}</p>
    </div>
  )
}

export default List;