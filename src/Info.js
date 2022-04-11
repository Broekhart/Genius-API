import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
 const Info = ({colors}) => {

// Id prende valore dal numero della barra di ricerca: se l'URL è /info/1, id = 1. Il valore della barra di ricerca viene scelto dall'utente cliccando sulla canzone di Lyrics.
  const {id} = useParams()
// History è una variabile dell'hook useHistory che serve a indirizzare l'utente alla pagina voluta in base alla sua "storia" di windows.
  const history = useHistory()
//Lyrics, title, artist, release, img e youtube: rispettivamente il testo, il titolo, il nome dell'artista, la data di release,
// l'immagine di essa e il link del vdeo youtube della canzone scelta.
  const [lyrics, setLyrics] = useState(null)
  const [title, setTitle] = useState(null)
  const [artist, setArtist] = useState(null)
  const [release, setRelease] = useState(null)
  const [img, setImg] = useState(null)
  const [youtube, setYoutube] = useState(null)

// Key dell'API
   const secondKey = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
		'X-RapidAPI-Key': 'c6dc26ee51msh6071062bc8d0b39p12e832jsn88748cb729b4'
	}
};

// Ho utilizzato useEffect e non useFetch perché l'API non mi permetteva di fare più di una richiesta al secondo, e non potevo usare custom hook all'interno di una callback
useEffect(() => {
// Fetch del testo della canzone e valore passato alla variabile Lyrics.
  fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/' + id + '/lyrics', secondKey)
  .then(response => response.json())
  .then((response) => {
    setLyrics(response.response.lyrics.lyrics.body.html)
  })
// Una volta che la prima chiamata è stata fatta, e che sono passati due secondi per essere sicuri di non bloccare la chiamata all'API,
// parte la seconda fetch che va a prendere il titolo della canzone, il link del vdeo youtube, il nome dell'artista, la data di release e l'immagine di essa.
// Ho creato una variabile (redux) per semplificare la scrittura
  .then(setTimeout(() =>{
      fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/' + id + '?text_format=dom', secondKey)
      .then(response => response.json())
      .then((response) => {
        const redux = response.response.song
        setTitle(redux.title)
        setYoutube(redux.youtube_url)
        setArtist(redux.artist_names)
        setRelease(redux.release_date)
        setImg(redux.song_art_image_thumbnail_url)
      })
  }, 2000)
  )
}, [])

// Attraverso l'hook useHistory, al click della freccia in basso a destra si torna indietro di una pagina
   const goBehind = () => {
     history.go(-1)
   }

   return (
     <>
     {img && <header className="block3" style={{background:colors}}>
<div className="info1"> <img alt="" src={img} /> </div>
<div className="info2">
  <h1> {title} </h1>
  <h1> {artist} </h1>
  </div>
<div className="info3">   <p> Release data: </p>
  <p> {release} </p>
  <a href={youtube} target="_blank"> <i class="fab fa-youtube"></i> </a>
  </div>
</header>}
{img && <div className="song">
<div
  dangerouslySetInnerHTML={{__html: lyrics}}
/>
</div>}
{img && <div  onClick={goBehind} className="back" style={{background:colors}}>
<i className="fas fa-angle-double-left"></i>
</div>}
{typeof img === "object" && <div class="loading"> </div>}
</>
   )
 }

export default Info
