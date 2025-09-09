import { Link } from 'react-router-dom'
import './Index.scss'

export default function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>
        Oups! La page
        <br className="mobile-break" /> que vous demandez n'existe pas.
      </p>
      <Link to="/" className="lien">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
