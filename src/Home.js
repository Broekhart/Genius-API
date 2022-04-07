import Principal from './Principal.js'
import Blocks from './Blocks.js'
import {useState} from 'react'
import useFetch from './useFetch.js'

const Home = () => {

// Search: il nome che andrai ad inserire nella barra di ricerca. Artist e img: il nome dell'artista e l'immagine che vengono prese dall'API.
// Quando artist prende valore e diventa vera, compaiono i risultati dalla barra di ricerca
// ChosenImg e chosenArtist: l'immagine e il nome dell'artista scelto tra quelli usciti dalla barra di ricerca.
//  Data: l'intero oggetto fetchato dall'Api, per il fetch ho utilizzato il custom Hook useFetch.
// Accesso: una variabile che serve per accedere al componente successivo, Principal. Attraverso la funzione newSection viene cambiato il suo stato.

  const [search,setSearch] = useState("")
  const [artist,setArtist] = useState(null)
  const [img,setImg] = useState(null)
  const [chosenImg, setChosenImg] = useState(null)
  const [chosenArtist, setChosenArtist] = useState(null)
  const [data] = useFetch('https://genius.p.rapidapi.com/search?q=' + search)
  const [accesso, setAccesso] = useState(false)


// Attivata attraverso il click della lente di ricerca, da alle variabili artist e img un'array di stringhe.

  const researchArtist = () => {
    setArtist([data.response.hits[0].result.primary_artist.name, data.response.hits[3].result.primary_artist.name, data.response.hits[5].result.primary_artist.name])
    setImg([data.response.hits[0].result.primary_artist.image_url, data.response.hits[3].result.primary_artist.image_url, data.response.hits[5].result.primary_artist.image_url])
  }

  // Attivata attraverso il click dell'immagine o del testo usciti fuori dalla ricerca, da valore alle variabili chosenImg e chosenArtist

  const newSection = (i) => {
    setAccesso(true)
    setChosenImg(img[i])
    setChosenArtist(artist[i])
  }

  return (
    <>
    {!accesso && <div className="principale">
    <div className="card">
      <h1> Scrivi il nome dell'artista: </h1>
    <form className="form1">
      <input type="text" required value={search} onChange={(e) => setSearch(e.target.value)}  />
    <i onClick={researchArtist} class="fas fa-search"></i>
    </form>
    </div>
      {artist && <Blocks artist={artist} img={img} newSection={newSection}/>}
    </div>}
    {accesso && <Principal researchArtist={researchArtist} chosenArtist={chosenArtist} imgArtist={chosenImg} />}
    </>
  )
}

export default Home
