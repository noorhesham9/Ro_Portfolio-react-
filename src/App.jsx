import { useState } from "react";
import "./App.css";
// import Header from "./components/header/header";
import Header from "./components/header/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/about";
import Services from "./components/services/services";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import AllContact from "./components/contact/AllContact";
function App() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <AllContact />
    </div>
  );
}

export default App;
