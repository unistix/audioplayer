import React, { useContext } from 'react'
import {FaPlay,  FaHeart, FaEllipsisH} from 'react-icons/fa';
//import { song_list } from '../../context/songs';
import playerContext from '../../context/PlayerContext';


const Playlist = () => {
    //var songslist = song_list
  const {songs, currentSong, SetCurrent} = useContext(playerContext)
  return (
    <div className='playlist'>
    <ul className="loi">
        {songs.map((song, i) => (
          <li 
            className={'songContainer ' + (currentSong === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
        
            <div className="tmbn_song">
                <FaPlay/>
            </div>
            <div className="songmeta_playlist">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
            <div className="playlist_btns_group">
              <button className="fav_song playlist_btn">
                <FaHeart/>
              </button>
              <button className="options_song playlist_btn">
                <FaEllipsisH/>
              </button>
            </div>
          </li>
        ))}

    </ul>
    </div>
  )
}

export default Playlist