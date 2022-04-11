// Blocks: dove escono fuori il nome e l'immagine degli artisti
import Blocks from './Blocks.js'
// Lyrics: interfaccia delle prime cinque canzoni per popolarità dell'artista scelto
import Lyrics from './Lyrics.js'
import {useState} from 'react'
// Custom hook che va a fetchare l'URL messo e ritorna l'oggetto ricevuto.
import useFetch from './useFetch.js'

const Home = ({colors, changeColors}) => {

  // Search: il nome che andrai ad inserire nella barra di ricerca. Artist, id e img: il nome dell'artista. il suo id Genius e l'immagine che vengono prese dall'API.
  // Quando artist prende valore e diventa vera, compaiono i risultati dalla barra di ricerca
  // ChosenImg, chosenId e chosenArtist: l'immagine, l'id e il nome dell'artista scelto tra quelli usciti dalla barra di ricerca.
  const [search,setSearch] = useState("")
  const [artist,setArtist] = useState(null)
  const [img,setImg] = useState(null)
  const [chosenImg, setChosenImg] = useState(null)
  const [chosenArtist, setChosenArtist] = useState(null)
  const [id, setId] = useState(null)
  const [chosenId, setChosenId] = useState(null)

  // Accesso: una variabile che serve per accedere al componente successivo, Principal. Attraverso la funzione newSection viene cambiato il suo stato.
  // DisplayBlock: stessa logica di accesso, serve per mostrare/nascondere il secondo Blocks
  const [accesso, setAccesso] = useState(false)
  const [displayBlock, setDisplayBlock] = useState(false)

  // Socials: i link di facebook e instagram dell'artista scelto.
  const [socials, setSocials] = useState(null)

  // titleSong, songImg, songArtist e musicId: sono rispettivamente i titoli, le immagini, il nome artista e l'id della canzone delle prime cinque canzoni dell'artista scelto,
  const [titleSong, setTitleSong] = useState(false)
  const [songImg, setSongImg] = useState(false)
  const [songArtist, setSongArtist] = useState(false)
  const [musicId, setMusicId] = useState(false)


  // Key: la chiave di accesso per l'API
  const key = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Host': 'genius.p.rapidapi.com',
  'X-RapidAPI-Key': 'c6dc26ee51msh6071062bc8d0b39p12e832jsn88748cb729b4'
}
};

// data: l'intero oggetto SEARCH fetchato dall'API, per il fetch ho utilizzato il custom Hook useFetch.
// secondData: l'intero oggeto ARTISTS fetchato dall'API
// thirdData: l'intero oggetto SONGS fetchato dall'API.
  const [data] = useFetch('https://genius.p.rapidapi.com/search?q=' + search, key)
  const [secondData] = useFetch('https://genius.p.rapidapi.com/artists/' + id, key)
  const [thirdData] = useFetch('https://genius.p.rapidapi.com/artists/' + id + '/songs?sort=popularity', key)


// Attivata attraverso il click della lente di ricerca, da alle variabili artist e img un'array di stringhe e cambia lo stato del secondo Blocks.
  const researchArtist = () => {
    setArtist([data.response.hits[0].result.primary_artist.name, data.response.hits[3].result.primary_artist.name, data.response.hits[5].result.primary_artist.name])
    setImg([data.response.hits[0].result.primary_artist.image_url, data.response.hits[3].result.primary_artist.image_url, data.response.hits[5].result.primary_artist.image_url])
    setId([data.response.hits[0].result.primary_artist.id, data.response.hits[3].result.primary_artist.id, data.response.hits[5].result.primary_artist.id])
    setDisplayBlock(true)
  }

  // Attivata attraverso il click dell'immagine o del testo usciti fuori dalla ricerca, da valore alle variabili chosenImg e chosenArtist
  const newSection = (i) => {
    //Promise composta da una prima funzione che da valore a variabili varie. Viene fullfilled se thirdData viene fetchato (diventa quindi true) e prende valore.
      new Promise(function(myResolve) {
      changeColors()
      setDisplayBlock(false)
      setAccesso(true)
      setChosenImg(img[i])
      setChosenArtist(artist[i])
      setChosenId(id[i])
      setSearch("")
      setSocials(["https://instagram.com/" + secondData.response.artist.instagram_name, "https://facebook.com/" + secondData.response.artist.facebook_name])
    if (thirdData) {
      myResolve("OK");
    }})
    //Funzione che parte una volta risolta la Promise, da valore a tutte le variabili che servono per il componente Lyrics
    .then(() => {
    setTitleSong([thirdData.response.songs[0].title, thirdData.response.songs[1].title, thirdData.response.songs[2].title, thirdData.response.songs[3].title, thirdData.response.songs[4].title])
    setMusicId([thirdData.response.songs[0].id, thirdData.response.songs[1].id, thirdData.response.songs[2].id, thirdData.response.songs[3].id, thirdData.response.songs[4].id])
    setSongImg([thirdData.response.songs[0].song_art_image_thumbnail_url, thirdData.response.songs[1].song_art_image_thumbnail_url, thirdData.response.songs[2].song_art_image_thumbnail_url, thirdData.response.songs[3].song_art_image_thumbnail_url,
    thirdData.response.songs[4].song_art_image_thumbnail_url])
    setSongArtist([thirdData.response.songs[0].artist_names, thirdData.response.songs[1].artist_names, thirdData.response.songs[2].artist_names, thirdData.response.songs[3].artist_names, thirdData.response.songs[4].artist_names])
  })
}

  return (
    <div style={{background:colors}}>
    {!accesso && <main className="principale">
    <div className="card">
      <h1> Scrivi il nome dell'artista: </h1>
    <form className="form1">
      <input type="text" placeholder="Artista" required value={search} onChange={(e) => setSearch(e.target.value)}  />
    <i onClick={researchArtist} className="fas fa-search"></i>
    </form>
    </div>
      {artist && <Blocks artist={artist} img={img} newSection={newSection} options="options1" border="border1"/>}
    </main>}
    <>
    {songImg && <main className="block1">
    <section className="int1">
    {accesso && <div>
       <form className="form2">
      <input id="input2" placeholder="Artista" type="text" required value={search} onChange={(e) => setSearch(e.target.value)}  />
    <i onClick={researchArtist} className="fas fa-search"></i>
    </form>
    {displayBlock && <Blocks artist={artist} img={img} newSection={newSection} options="options2" border="border2"/>}
  </div>}
        <h1> {chosenArtist} </h1>
        <div className="socials">
          {socials && <a target="_blank" href={socials[0]}>  <i class="fab fa-instagram"> </i> </a>}
          {socials && <a target="_blank" href={socials[1]}>  <i class="fab fa-facebook"> </i> </a>}
        </div>
      </section>
    <section className="int2">
    <img src={chosenImg} />
    </section>
    </main>}
    </>
    {songImg && <Lyrics titleSong={titleSong} img={songImg} artist={songArtist} id={musicId}/>}
    </div>
  )
}

export default Home
