import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import useFetch from './useFetch.js'

 const Info = () => {

  const {id} = useParams()
  const history = useHistory()
  const [lyrics, setLyrics] = useState(null)
  const [title, setTitle] = useState(null)
  const [artist, setArtist] = useState(null)
  const [release, setRelease] = useState(null)
  const [description, setDescription] = useState(null)
  const [img, setImg] = useState(null)

   const secondKey = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
		'X-RapidAPI-Key': 'c6dc26ee51msh6071062bc8d0b39p12e832jsn88748cb729b4'
	}
};

useEffect(() => {
  fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/' + id + '/lyrics', secondKey)
  .then(response => response.json())
  .then((response) => {
    setLyrics(response.response.lyrics.lyrics.body.html)
  })
  .then(setTimeout(() =>{
      fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/' + id + '?text_format=dom', secondKey)
      .then(response => response.json())
      .then((response) => {
        const redux = response.response.song
        setTitle(redux.title)
        setArtist(redux.artist_names)
        setRelease(redux.release_date)
        setDescription(redux.description_preview)
        setImg(redux.song_art_image_thumbnail_url)
      })
  }, 2000)
  )
}, [])

   const goBehind = () => {
     history.go(-1)
   }

   return (
     <>
     {img && <header className="block3">
<div className="info1"> <img src={img} /> </div>
<div className="info2">
  <h1> {title} </h1>
  <h1> {artist} </h1>
  <p> Release data: </p>
  <p> {release} </p>
  </div>
<div className="info3"> <p> {description} </p> </div>
</header>}
{img && <div className="song">
<div
  dangerouslySetInnerHTML={{__html: lyrics}}
/>
</div>}
{img && <div className="back">
<i onClick={goBehind} className="fas fa-angle-double-left"></i>
</div>}
{typeof img === "object" && <div class="loading"> </div>}
</>
   )
 }

export default Info
