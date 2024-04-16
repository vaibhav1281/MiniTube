import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../redux/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentsContainer from "../CommentsContainer"


const WatchVideoPage = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  },[])

  return (
    <div className="flex flex-col">
      <div className="container">
        <iframe 
            // width="560" 
            // height="315" 
            className="w-auto h-full md:w-[800px] md:h-[400px] rounded-2xl"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=mc1QOxxY4HdjFCLm`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchVideoPage