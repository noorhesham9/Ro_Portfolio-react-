import { useState } from "react";
import "./App.css";
// import Header from "./components/header/header";
import Header from "./components/header/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/about";
import Services from "./components/services/services";
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
