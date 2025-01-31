import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/ProfilePage";
import Homepage from "./components/homepage/Homepage";
import ProfilePut from "./components/profile/ProfilePut";
import NavBarNew from "./components/NavBarNew";
import ExperiencesSetting from "./components/profile/ExperiencesSetting";
import FooterSection from "./components/Footer";
import JobsHome from "./components/jobs/JobsHome";
import Setting from "./components/settingPage/Setting";
import JobDetails from "./components/jobsDetailes/JobDetailes";


function App() {
  return (
    <BrowserRouter>
      <NavBarNew />
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/put" element={<ProfilePut />} />
        <Route
          path="/profile/setting/experiences"
          element={<ExperiencesSetting />}
        />
        <Route path="/profile/setting" element={<Setting />} />
        <Route path="/Jobs" element={<JobsHome />} />
        <Route path="/Jobs/detailes" element={<JobDetails/>}/>
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
