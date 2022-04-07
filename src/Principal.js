import {useState} from 'react'
import useFetch from './useFetch.js'

const Principal = ({researchArtist, imgArtist, chosenArtist}) => {

  const [secondSearch, setSecondSearch] = useState("")

  return (
    <>
    {<div className="block1">
    <div className="int1">
        <form className="form2">
      <input type="text" required value={secondSearch} onChange={(e) => setSecondSearch(e.target.value)}  />
        <i onClick={researchArtist} class="fas fa-search"></i>
        </form>
        <h1> {chosenArtist} </h1>
        <div className="socials">
          <i class="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    <div className="int2">
    <img src={imgArtist} />
    </div>
    </div>}
    </>
  )
}

export default Principal
