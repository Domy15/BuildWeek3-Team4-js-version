import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/ProfilePage";
import FooterSection from "./components/Footer";
import Homepage from "./components/homepage/Homepage";
import ProfilePut from "./components/profile/ProfilePut";
import NavBarNew from "./components/NavBarNew";
import ExperiencesSetting from "./components/profile/ExperiencesSetting";

function App() {
  return (
    <BrowserRouter>
      <NavBarNew />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/put" element={<ProfilePut />} />
        <Route path="/profile/setting/experiences" element= {<ExperiencesSetting/>}/>
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
