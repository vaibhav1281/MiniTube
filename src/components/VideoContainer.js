import useLandingPageVideos from "../hooks/useLandingPageVideos"
import VideoCard from "./VideoCard"


const VideoContainer = () => {
    const { videos } = useLandingPageVideos()
    console.log(videos)
  return (
    <div className="flex flex-wrap gap-6 m-10 justify-center items-center">
      {
        videos.map(video => (
          <div  key={video.id}
            className="flex"
          >
            <VideoCard  videoDetails={video} />
          </div>
        ))
      }
    </div>
  )
}

export default VideoContainer