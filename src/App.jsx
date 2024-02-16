import { useState } from "react";
import "./App.css";
// import Header from "./components/header/header";
import Header from "./components/header/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
function App() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
    </div>
  );
}

export default App;
