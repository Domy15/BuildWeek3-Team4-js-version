import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/ProfilePage";
import FooterSection from "./components/Footer";
import ProfilePut from "./components/profile/ProfilePut";

function App() {

  return (
    <BrowserRouter>
      {/* <LinkedinNavbar /> */}
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path= '/profile/:id' element= {<ProfilePage/>}/>
        <Route path="/profile/put" element={<ProfilePut />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  )
}

export default App
