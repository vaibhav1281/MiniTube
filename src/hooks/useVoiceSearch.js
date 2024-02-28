import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const useVoiceSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [showStopButton, setShowStopButton] = useState(false);

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

    return {
        searchText,
        isListening,
        showStopButton,
        handleVoiceSearch,
        handleStopVoiceSearch,
        setSearchText
    };
}

export default useVoiceSearch;
