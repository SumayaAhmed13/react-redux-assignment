import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import Team from "./pages/Team";
import Testimonial from './pages/Testimonial';

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
     </Router>
    </>
  )
}

export default App
