import React, {useState, useRef, useEffect, useContext} from 'react'
import playerContext from '../context/PlayerContext'
import {FaVolumeUp, FaPlay, FaStepBackward, FaStepForward, FaPause, FaRandom,FaRedoAlt } from 'react-icons/fa';

const Controls = () => {
    const {
        currentSong,
        songs,
        nextSong,
        prevSong,
        repeat,
        random,
        playing,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songslist,
      } = useContext(playerContext)
    const audio = useRef('audio_tag')

    // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
     
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100
        setCurrentTime(compute)
        audio.current.currentTime = compute
      }

  const handleVolume = (q) => {
    setStateVolum(q)
    audio.current.volume = q
  }
  return (
    <div className='controls'>
        <audio
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => setDur(e.target.duration)}
            onEnded={handleEnd}
            ref={audio}
            type="audio/mpeg"
            preload="true"
            src={songs[currentSong].fileUrl}
        
        />
        <div className="vlme">
        <span className="volum">
          <FaVolumeUp/>
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>

      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
            <FaStepBackward/>
        </span>

        <span
          className="play"
          onClick={() => {
            togglePlaying()
            toggleAudio()
            
          }}
        >
          <span className={!playing ? '' : 'hide'}>
            <FaPlay/>
          </span>
          <span className={!playing ? 'hide' : ''}>
            <FaPause/>
          </span>
        </span>

        <span className="next" onClick={() => {
            nextSong()
            toggleAudio()
            toggleAudio()
          }}>
            <FaStepForward/>
        </span>
      </div>
      <div className="progressb">
        <div className="songMeta">
          <span className="songtitle">{songs[currentSong].title}</span>
          <span className="songartistName">
            {songs[currentSong].artistName}
          </span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className="currentT">{fmtMSS(currentTime)}</span>/
        <span className="totalT">{fmtMSS(dur)}</span>
      </div>
      <div className="plsoptions">
        <span
          onClick={toggleRandom}
          className={'random ' + (random ? 'active' : '')}
        >
          <FaRandom/>
        </span>
        <span
          onClick={toggleRepeat}
          className={'repeat ' + (repeat ? 'active' : '')}
        >
          <FaRedoAlt/>
        </span>
      </div>
    </div>

        
   
  )
}

export default Controls