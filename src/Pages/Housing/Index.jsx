import logements from '../../Data/Logements.json'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Slideshow from '../../Components/Slideshow/Index'

export default function Housing() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <Navigate to="/error" />
  }

  return (
    <div>
      <div>
        <Slideshow />
      </div>
      <div>
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <div className="tags">
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
