import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";
import FooterSection from "./components/Footer";
import QuarantesimaNavBar from "./components/QuarantesimaNavBar";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <QuarantesimaNavBar />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
