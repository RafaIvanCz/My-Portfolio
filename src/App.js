import "../src/App.css"
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import LateralProfile from "./Components/LateralProfile/LateralProfile";


const App = () => {
  return (
    <section>
      <LateralProfile />
      <>
        <Hero />
        <About />
      </>
    </section>
  );
}

export default App;
