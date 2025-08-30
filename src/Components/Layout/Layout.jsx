import { Outlet } from "react-router-dom";
import Header from "../Header/Index";
import Footer from "../Footer/Index";

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