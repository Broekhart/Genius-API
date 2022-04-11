import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Lyrics = ({titleSong, img, artist, id}) => {

  const canzoni = [{titleSong:titleSong[0],img:img[0],artist:artist[0],id:id[0], classLyrics:1}, {titleSong:titleSong[1],img:img[1],artist:artist[1],id:id[1],classLyrics:2},
  {titleSong:titleSong[2],img:img[2],artist:artist[2],id:id[2],classLyrics:3}, {titleSong:titleSong[3],img:img[3],artist:artist[3],id:id[3],classLyrics:4}, {titleSong:titleSong[4],img:img[4],artist:artist[4],id:id[4],classLyrics:5}]

  return (
    <>
   <div className="block2">
   {canzoni.map((song) =>
     <div className={"lyrics" + song.classLyrics} >
     <Link to={'/info/' + song.id}> {song.titleSong} </Link>
     <p> {song.artist} </p>
     <div className="containerImg"> <img src={song.img} /> </div>
     </div>

   )}
</div>
</>
  )
}

export default Lyrics
