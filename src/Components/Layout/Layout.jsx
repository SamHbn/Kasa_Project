import { Outlet } from 'react-router-dom'
import Header from '../Header/Index'
import Footer from '../Footer/Index'
import './Index.scss'

export default function Layout() {
  return (
    <div className="layout">
      <div className="page-container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
