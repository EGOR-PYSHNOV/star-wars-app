import React, { useEffect, useRef } from 'react';
import blackStar from '../../assets/blackStar.mp3';
import lightStar from '../../assets/lightStar.mp3';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';
function Audio() {
  const { darkMode, isPlay } = useSelector(({ StarWars }) => StarWars);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlay) {
      console.log(audioRef.current.audioEl.current.play());
    } else {
      console.log(audioRef.current.audioEl.current.pause());
    }
  }, [isPlay]);

  return (
    <div>
      {darkMode ? (
        <ReactAudioPlayer src={blackStar} autoPlay ref={audioRef} />
      ) : (
        <ReactAudioPlayer src={lightStar} autoPlay ref={audioRef} />
      )}
    </div>
  );
}

export default Audio;
