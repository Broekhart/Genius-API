import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Lyrics = ({titleSong, img, artist, id}) => {

  return (
    <>
   <div className="block2">
<div className="lyrics1">
  <Link to={'/Info/'+ id[0]}> {titleSong[0]} </Link>
  <p> {artist[0]} </p>
  <div className="containerImg"> <img src={img[0]}/> </div>
  </div>
<div className="lyrics2">  <Link to={'/Info/'+ id[1]}> {titleSong[1]} </Link>
  <p> {artist[1]} </p>
  <div className="containerImg"> <img src={img[1]}/> </div>
  </div>
 <div className="lyrics3">
   <Link to={'/Info/'+ id[2]}> {titleSong[2]} </Link>
  <p> {artist[2]} </p>
  <div className="containerImg"> <img src={img[2]}/> </div>
  </div>
<div className="lyrics4">
  <Link to={'/Info/'+ id[3]}> {titleSong[3]} </Link>
  <p> {artist[3]} </p>
  <div className="containerImg"> <img src={img[3]}/> </div>
  </div>
<div className="lyrics5">
  <Link to={'/Info/'+ id[4]}> {titleSong[4]} </Link>
  <p> {artist[4]} </p>
  <div className="containerImg"> <img src={img[4]}/> </div>
  </div>
</div>
</>
  )
}

export default Lyrics
