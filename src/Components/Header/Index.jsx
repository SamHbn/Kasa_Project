import { NavLink } from "react-router-dom"
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
                    <li>
                        <NavLink 
                            to="/" end
                            className={({isActive}) => isActive ? "active" : ""}>
                            Acceuil</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about"
                            className={({isActive}) => isActive ? "active" : ""}>
                            A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

// regarder "navLink" pour peut être ajouter le soulignement lorsquon se trouve sur une page
// et voir s'il faut pas plutot importer "main" dans les fichiers scss plutot que variables