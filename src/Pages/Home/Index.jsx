import Banner from "../../Components/Banner/Index"
import Card from "../../Components/Card/Index"
import "./Index.scss"

export default function Home() {
    return (
        <div>
            <Banner />
            <div className="gallery">
                <Card />
            </div>
        </div>
    )
}