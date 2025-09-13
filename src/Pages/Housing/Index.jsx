import logements from '../../Data/Logements.json'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Slideshow from '../../Components/Slideshow/Index'
import Collapse from '../../Components/Collapse/Index'
import Rating from '../../Components/Rating/Index'
import Tag from '../../Components/Tag/Index'
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

          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </ul>
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

          <Rating value={logement.rating} />
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
