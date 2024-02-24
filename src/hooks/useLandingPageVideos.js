import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const useLandingPageVideos = () => {

    const[videos, setVideos] = useState([])
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    const getLandingPageVideos = async () => {
        const data = await fetch(YOUTUBE_API+ apiKey)
        const json = await data.json()
        setVideos(json.items);
    }

    useEffect(() => {
        getLandingPageVideos()
    },[])

    return { videos };
}
export default useLandingPageVideos;