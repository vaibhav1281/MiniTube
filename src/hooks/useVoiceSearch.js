
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../redux/searchSlice";

const useVoiceSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [showStopButton, setShowStopButton] = useState(false);
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestion, setShowSeggetion] = useState(false);

    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch()

    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            console.log("Browser doesn't support speech recognition.");
            return;
        }

        if (listening) {
            setIsListening(true);
            setShowStopButton(true);
        } else {
            setIsListening(false);
            setShowStopButton(false);
        }

        setSearchText(transcript);
    }, [listening, transcript]);

    const handleVoiceSearch = () => {
        if (!isListening) {
            SpeechRecognition.startListening();
        } else {
            SpeechRecognition.stopListening();
        }
    }

    const handleStopVoiceSearch = () => {
        SpeechRecognition.stopListening();
        setIsListening(false);
        setShowStopButton(false);
        resetTranscript();
        setSearchText('');
    }

    // Debouncing
    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchText]){
                setSearchSuggestions(searchCache[searchText]);
            }else{
                getSearchSuggetion()
            }
        },200)
        // return () => clearTimeout(timer)
        return () => {
            clearTimeout(timer)
        }
    },[searchText])

    const getSearchSuggetion = async () => {
        const data = await fetch(SEARCH_API + searchText)
        const json = await data.json();
        setSearchSuggestions(json[1])
        dispatch(
            cacheResults({
            [searchText]: json[1]
        }))
        // console.log(json[1])
    }

    return {
        searchText,
        isListening,
        showStopButton,
        handleVoiceSearch,
        handleStopVoiceSearch,
        setSearchText,
        searchSuggestions,
        setSearchSuggestions,
        showSuggestion,
        setShowSeggetion
    };
}

export default useVoiceSearch;
