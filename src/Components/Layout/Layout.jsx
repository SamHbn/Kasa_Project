import { Outlet } from "react-router-dom";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import "./Index.scss"

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}