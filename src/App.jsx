import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import Team from "./pages/Team";
import Testimonial from './pages/Testimonial';
import Footer from "./component/Footer";
import Subscribe from "./component/Subscribe";

function App() {
  

  return (
    <>
      <Router>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/projectpage" element={<ProjectPage/>}/>
         <Route path="/servicepage" element={<ServicePage/>}/>
         <Route path="/team" element={<Team/>}/>
         <Route path="/testimonial" element={<Testimonial/>}/>
    
      </Routes>
      <Subscribe/>
      <Footer/>
     </Router>
    </>
  )
}

export default App
