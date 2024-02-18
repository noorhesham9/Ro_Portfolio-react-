import { useState } from "react";
import "./App.css";
// import Header from "./components/header/header";
import Header from "./components/header/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Services from "./components/services/Services";
function App() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Services />
    </div>
  );
}

export default App;
