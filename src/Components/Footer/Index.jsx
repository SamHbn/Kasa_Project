import logo from "../../Assets/footer-logo.png"
import "./Index.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} />
            </div>
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}