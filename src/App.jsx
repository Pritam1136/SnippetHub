/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Docs } from "./pages/Docs";
import { Navbar } from "./components/Navbar";
import { ModulesNav } from "./modules/modulesNavigate/ModulesNav";
import { Buttons } from "./modules/modulesComponent/Buttons";
import { Cards } from "./modules/modulesComponent/Cards";
import { Headers } from "./modules/modulesComponent/Headers";
import { Footers } from "./modules/modulesComponent/Footers";
import { LogIn } from "./pages/LogIn";
import { Testimonials } from "./modules/modulesComponent/Testimonials";
import { Contents } from "./modules/modulesComponent/Content";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/modules" element={<ModulesNav />} />
          <Route path="/modules/buttons" element={<Buttons />} />
          <Route path="/modules/cards" element={<Cards />} />
          <Route path="/modules/headers" element={<Headers />} />
          <Route path="/modules/footers" element={<Footers />} />
          <Route path="modules/testimonials" element={<Testimonials />} />
          <Route path="modules/content" element={<Contents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
