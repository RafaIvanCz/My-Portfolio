import "../src/App.css"
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import LateralProfile from "./Components/LateralProfile/LateralProfile";
import Portfolio from "./Components/Portfolio/Portfolio";


const App = () => {
  return (
    <section>
      <LateralProfile />
      <div>
        <Hero />
        <About />
        <Portfolio />
      </div>
    </section>
  );
}

export default App;
