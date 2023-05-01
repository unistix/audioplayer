import React, {useReducer} from 'react'
import playerReducer from './PlayerReducer'
import playerContext from './PlayerContext'

import { song_list } from './songs';


const PlayerState = (props) => {
    const initialState = {
        currentSong: 0,
        songs: song_list,
        repeat: false,
        random: false,
        playing: false

    }

    const [state, dispatch] = useReducer(playerReducer, initialState)
    // Set current song
    const SetCurrent = (id) => dispatch({type:'SET_CURRENT_SONG', data:id})

    // Set songs array - redundant as set on initital 
    const songsSet = (songArr) => dispatch({ type: 'SET_SONGS_ARRAY', data: songArr })

    // Set playing state
    const togglePlaying = () => dispatch({ type: 'TOGGLE_PLAYING', data: state.playing ? false : true })


    // Prev song
    const prevSong = () => {
        /*if (state.random) {
        return SetCurrent(~~(Math.random() * state.songslist.length))
        }*/

        if (state.currentSong === 0) {
        SetCurrent(state.songs.length - 1)
      
        } else {
        SetCurrent(state.currentSong - 1)
        
        }
    }
    // Next song
    const nextSong = () => {
       /* if (state.random) {
        return SetCurrent(~~(Math.random() * state.songslist.length))
        }*/
        if (state.currentSong === state.songs.length - 1) {
        SetCurrent(0)
  
        } else {
        SetCurrent(state.currentSong + 1)
      
        }
    }

    // Repeat and Random
    const toggleRepeat = (id) => dispatch({ type: 'TOGGLE_REPEAT', data: state.repeat ? false : true })
    const toggleRandom = (id) => dispatch({ type: 'TOGGLE_RANDOM', data: state.random ? false : true })

    // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return SetCurrent(~~(Math.random() * state.songs.length))
    } else {
      if (state.repeat) {
        nextSong()
      } else if (state.currentSong === state.songs.length - 1) {
        return
      } else {
        nextSong()
      }
    }
  }


    return (
      
            <playerContext.Provider
            value={{
                currentSong: state.currentSong,
                songs: state.songs,
                repeat: state.repeat,
                random: state.random,
                playing: state.playing,
                audio: state.audio,
                SetCurrent,
                nextSong,
                prevSong,
                toggleRandom,
                toggleRepeat,
                togglePlaying,
                handleEnd,
                songsSet,


            }}>

            {props.children}
            </playerContext.Provider>
        
    )
  
}

export default PlayerState