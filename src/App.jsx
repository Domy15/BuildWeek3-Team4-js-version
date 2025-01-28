import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";
import FooterSection from "./components/Footer";
import QuarantesimaNavBar from "./components/QuarantesimaNavBar";
import Homepage from "./components/homepage/Homepage";
import NewsHome from "./components/homepage/NewsHome";
import ProfilePut from "./components/profile/ProfilePut";


function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <QuarantesimaNavBar />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path= '/profile/:id' element= {<ProfilePage/>}/>
        <Route path="/profile/put" element={<ProfilePut />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
