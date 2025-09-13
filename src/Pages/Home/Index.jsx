import { NavLink } from 'react-router-dom'
import Banner from '../../Components/Home-banner/Index'
import Card from '../../Components/Card/Index'
import logements from '../../Data/Logements.json'
import './Index.scss'

export default function Home() {
  return (
    <div className="main">
      <Banner />
      <div className="gallery">
        {logements.map((logement, index) => (
          <NavLink to={`/Housing/${logement.id}`} key={index}>
            <Card title={logement.title} cover={logement.cover} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}
