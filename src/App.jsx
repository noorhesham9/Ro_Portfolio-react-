import Header from "./components/header/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/about";
import Services from "./components/services/services";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import AllContact from "./components/contact/AllContact";
import Footer from "./components/footer/footer";
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
      <Footer />
    </div>
  );
}

export default App;
