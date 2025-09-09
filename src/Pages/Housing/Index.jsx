import logements from '../../Data/Logements.json'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Slideshow from '../../Components/Slideshow/Index'
import { FaStar } from 'react-icons/fa'
import Collapse from '../../Components/Collapse/Index'
import './Index.scss'

export default function Housing() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <Navigate to="/error" />
  }

  const [firstName, lastName] = logement.host.name.split(' ')

  return (
    <div>
      <Slideshow />
      <div className="caracterisques">
        <div className="left">
          <div className="titres">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>

          <div className="tags">
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="host">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
            <img src={logement.host.picture} />
          </div>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < logement.rating ? '#ff6060' : '#E3E3E3'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="details">
        <Collapse
          title="Description"
          content={logement.description}
          titleTag="h3"
        />
        <Collapse
          title="Équipements"
          content={logement.equipments}
          titleTag="h3"
          className="collapse-equipements"
        />
      </div>
    </div>
  )
}
