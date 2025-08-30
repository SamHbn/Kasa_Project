import { Link } from "react-router-dom"
import logo from "../../Assets/header-logo.png"
import "./Index.scss"

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

// regarder "navLink" pour peut être ajouter le soulignement lorsquon se trouve sur une page
// et voir s'il faut pas plutot importer "main" dans les fichiers scss plutot que variables