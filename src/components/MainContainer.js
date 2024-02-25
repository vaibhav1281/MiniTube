import Buttons from "./Buttons"
import VideoContainer from "./VideoContainer"


const MainContainer = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-scroll max-sm:top-[79px] max-sm:pl-4 max-sm:sticky bg-white dark:bg-gray-950 no-scrollbar">
        <Buttons/>
      </div>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer