import {useState} from 'react'

const Blocks = ({artist, img, newSection}) => {

  const [chosenImg, setChosenImg] = useState(null)
  const [chosenArtist, setChosenArtist] = useState(null)
  const [accesso, setAccesso] = useState(false)

return(
  <div className="options">
      <div className="border1">
      <img onClick={() => {newSection(0)}} src={img[0]} />
        <p onClick={() => {newSection(0)}}> {artist[0]} </p>
      </div>
      <div className="border1">
      <img onClick={() => {newSection(1)}} src={img[1]} />
      <p onClick={() => {newSection(1)}}> {artist[1]} </p>
       </div>
      <div className="border1">
      <img onClick={() => {newSection(2)}} src={img[2]} />
      <p onClick={() => {newSection(2)}}> {artist[2]} </p>
      </div>
  </div>
)
}

export default Blocks
