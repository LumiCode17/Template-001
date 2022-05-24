import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx'
import SocialIcons from './components/SocialIcons/SocialIcons.jsx'
/* import StayFit from './components/StayFit/StayFit.jsx' */
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import Homepage from "./routes/Home/Home";
/* import AboutPage from "./routes/AboutPage/AboutPage"; */
/* import Listpage from "./routes/Listpage/Listpage";
import Detailpage from "./routes/Detailpage/Detailpage";
import NavigationBar from "./components/navigation/NavigationBar"; */


const App = () => {
  
  return (
    <main>
      <BrowserRouter>
        <NavBar /> {/* calling the components / navBar here */} 
        <SocialIcons />
        {/* <StayFit /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" /* element={<AboutPage />} */ />
 
          {/* Page not found with path* */}
          <Route path="*" element={<h1>404 Page not found.</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
