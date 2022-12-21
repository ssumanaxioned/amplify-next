import { Storage } from "aws-amplify";
import Image from "next/image"
import { useEffect, useState } from "react";

const AmplifyImage = ({ data }) => {
  const [image, setImage] = useState("");

  const getImage = async () => {
    const key = await Storage.get(data, {
      level: 'public'
    })
    setImage(key)
  }

  useEffect(() => {
    getImage();
  }, [])
  
  return (
    image &&
    <Image
      layout="fill"
      objectFit="cover"
      src={image}
      alt="image"
    />
  )
}

export default AmplifyImage;