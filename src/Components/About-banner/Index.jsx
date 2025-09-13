import bannerImage from '../../Assets/About-banner.jpg'
import './Index.scss'

export default function AboutBanner() {
  return (
    <div
      className="about-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="about-overlay"></div>
    </div>
  )
}
