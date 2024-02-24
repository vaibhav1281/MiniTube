import useLandingPageVideos from "../hooks/useLandingPageVideos"


const VideoContainer = () => {
    const {videos} = useLandingPageVideos()
    console.log(videos)
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer