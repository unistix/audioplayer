import React, {useContext} from 'react'
import playerContext from '../context/PlayerContext'

const Header = () => {
  const {currentSong, songs} = useContext(playerContext)
  return (
    <>
    <header>
        <h3>
            ReactWave - {songs[currentSong].title}
        </h3>
    </header>
    
    </>
  )
}

export default Header