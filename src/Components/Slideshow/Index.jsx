import logements from '../../Data/Logements.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './Index.scss'
import arrowRight from '../../Assets/fleche-carrousel-droite.png'
import arrowLeft from '../../Assets/fleche-carrousel-gauche.png'

export default function Slideshow() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1,
    )
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="carrousel">
      <img
        className="image-fond"
        src={logement.pictures[currentIndex]}
        alt="Slide"
      />

      {logement.pictures.length > 1 && (
        <>
          <div className="arrows">
            <img className="arrowLeft" src={arrowLeft} onClick={handlePrev} />
            <img className="arrowRight" src={arrowRight} onClick={handleNext} />
          </div>
          <div className="compteur">
            {currentIndex + 1}/{logement.pictures.length}
          </div>
        </>
      )}
    </div>
  )
}
