import bannerImage from "../../Assets/home-banner.jpg";
import "./Index.scss"

export default function Banner() {
    return (
        <div className="hero-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="overlay"></div>
            <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}