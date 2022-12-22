import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

const AmplifyVideo = ({ data }) => {
  const [video, setVideo] = useState("");

  const getVideo = async () => {
    const key = await Storage.get(data, {
      level: 'public'
    })
    setVideo(key)
  }

  useEffect(() => {
    getVideo();
  }, [])
  
  return (
    video &&
    <video
      className="w-full h-full"
      playsInline
      autoPlay
      controls={false}
      src={video}
      alt="video"
    />
  )
}

export default AmplifyVideo;