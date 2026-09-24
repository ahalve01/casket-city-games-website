import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GrandOpening from "./components/GrandOpening";
import Events from "./components/Events";
import Shop from "./components/Shop";
import Trade from "./components/Trade";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />

        <GrandOpening />

        <Events />

        <Shop />

        <Trade />

        <Visit />
      </main>

      <Footer />
    </div>
  );
}

export default App;
