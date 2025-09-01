import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Index";
import About from "../../Pages/About/Index";
import Housing from "../../Pages/Housing/Index";
import Error from "../../Pages/Error/Index";



export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}