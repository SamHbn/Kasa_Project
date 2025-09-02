import Banner from '../../Components/Home-banner/Index'
import Card from '../../Components/Card/Index'
import logements from '../../Data/Logements.json'
import './Index.scss'

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}
