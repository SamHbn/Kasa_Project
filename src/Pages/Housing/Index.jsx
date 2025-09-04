import logements from '../../Data/Logements.json'
import { useParams } from 'react-router-dom'
import Error from '../Error/Index'

export default function Housing() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return Error
  }

  return (
    <div>
      <div>
        <img src={logement.cover} />
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
