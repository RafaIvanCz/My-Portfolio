import "../src/App.css"
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import LateralProfile from "./Components/LateralProfile/LateralProfile";
import Particle from "./Components/Particles/Particles";
import Portfolio from "./Components/Portfolio/Portfolio";

const App = () => {

  return (
    <section>
      <LateralProfile />
      <Particle />
      <div>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </section>
  );
}

export default App;
