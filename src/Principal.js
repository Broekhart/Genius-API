import {useState} from 'react'
import useFetch from './useFetch.js'
import Lyrics from './Lyrics.js'

const Principal = ({researchArtist, imgArtist, chosenArtist, socials}) => {

  return (
    <>
    {<main className="block1">
    <section className="int1">
        <h1> {chosenArtist} </h1>
        <div className="socials">
          {socials && <a target="_blank" href={socials[0]}>  <i class="fab fa-instagram"> </i> </a>}
          {socials && <a target="_blank" href={socials[1]}>  <i class="fab fa-facebook"> </i> </a>}
        </div>
      </section>
    <section className="int2">
    <img src={imgArtist} />
    </section>
    </main>}
    </>
  )
}

export default Principal
