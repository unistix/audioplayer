import React from 'react'
import { FaHeart, FaRegArrowAltCircleDown, FaEllipsisH} from 'react-icons/fa';


const fav = () => {
    console.log('I like this song') //Dummy function for liking songs
}
const Actions = () => {
  return (
    <div className="actions">
        <img src="https://freemusicarchive.org/image?file=images%2Falbums%2FSkidmore_College_Orchestra_-_Mussorgskys_Pictures_at_an_Exhibition_-_2009113013701972.jpg&width=290&height=290&type=image" />
        <div className="album_meta">
            <span className="alb_label">ALBUM</span>
            <h1>Mussorgsky's Pictures at an Exhibition</h1>
        </div>

        <div className="action_btns">
        <button onClick={() => fav()} className="fav_btn">
            <FaHeart/>
        </button>
        <button onClick={() => fav()} className="fav_btn">
            <FaRegArrowAltCircleDown/>
        </button>
        <button onClick={() => fav()} className="fav_btn">
            <FaEllipsisH/>
        </button>
        </div>
    
    </div>
  )
}

export default Actions