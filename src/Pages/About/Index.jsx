import AboutBanner from '../../Components/About-banner/Index'
import Collapse from '../../Components/Collapse/Index'
import aboutData from '../../Data/Content-About.json'
import './Index.scss'

export default function About() {
  return (
    <>
      <AboutBanner />
      <div className="about-collapses">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  )
}
