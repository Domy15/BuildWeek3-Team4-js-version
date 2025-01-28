import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/ProfilePage";
import FooterSection from "./components/Footer";
<<<<<<< HEAD
import Homepage from "./components/homepage/Homepage";
=======
import NewsHome from "./components/homepage/NewsHome"
import ProfilePut from "./components/profile/ProfilePut";

>>>>>>> 8cf926ac55248340702490d3dcb9f8abdca708d6

function App() {
  return (
    <BrowserRouter>
      {/* <LinkedinNavbar /> */}
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path= '/profile/:id' element= {<ProfilePage/>}/>
        <Route path="/profile/put" element={<ProfilePut />} />
      </Routes>
      <Homepage />
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
