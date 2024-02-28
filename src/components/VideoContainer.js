import { Link } from "react-router-dom"
import useLandingPageVideos from "../hooks/useLandingPageVideos"
import VideoCard from "./VideoCard"


const VideoContainer = () => {
    const { videos } = useLandingPageVideos()
  return (
    <div className="flex flex-wrap gap-6 m-10 justify-center items-center space-y-2">
      {
        videos.map(video => (
          <Link
            to={"/watch/?v=" + video.id}
            key={video.id}
            className="flex group hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg"
          >
            <VideoCard  videoDetails={video} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer