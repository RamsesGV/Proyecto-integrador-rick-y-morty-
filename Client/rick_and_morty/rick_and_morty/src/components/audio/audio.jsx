import React from "react";
import audioFile from './Rick and Morty - Evil Morty Theme Song (Feewet Trap Remix)-[onlinevideoconverter (mp3cut.net).mp3'
import './audio.css'

const Audio = () => {
    return ( 
        <audio className="audio" src={audioFile}  controls autoPlay preload loop/>

    )  
    }
    export default Audio;