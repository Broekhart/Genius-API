import {useState} from 'react'

// Artist e img: l'array dei nomi e immagini degli artisti trovati cliccando la barra di ricerca.
// newSection: la funzione che al click dell'artista o immagine scelta, reinderizza alla nuova sezione di esso
// options, border: due stringhe che servono per cambiare la classe CSS come si vuole
const Blocks = ({artist, img, newSection, options, border}) => {

return(
  <main className={options}>
      <section className={border}>
      <img onClick={() => {newSection(0)}} src={img[0]} />
        <p onClick={() => {newSection(0)}}> {artist[0]} </p>
      </section>
      <section className={border}>
      <img onClick={() => {newSection(1)}} src={img[1]} />
      <p onClick={() => {newSection(1)}}> {artist[1]} </p>
       </section>
      <section className={border}>
      <img onClick={() => {newSection(2)}} src={img[2]} />
      <p onClick={() => {newSection(2)}}> {artist[2]} </p>
      </section>
  </main>
)
}

export default Blocks
