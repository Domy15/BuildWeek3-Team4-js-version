import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/ProfilePage";
import FooterSection from "./components/Footer";
import NewsHome from "./components/NewsHome"

function App() {

  return (
    <BrowserRouter>
      {/* <LinkedinNavbar /> */}
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
      <NewsHome />
      <FooterSection />
    </BrowserRouter>
  )
}

export default App
