import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import "aos/dist/aos.css";
import Footer from "./components/Footer.jsx";
import Articles from "./components/Articles.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Articles />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
