import "./App.css";
import { SHOW_INVENTORY } from "./config";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GrandOpening from "./components/GrandOpening";
import Events from "./components/Events";
import Shop from "./components/Shop";
import Inventory from "./components/Inventory";
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

        {SHOW_INVENTORY && <Inventory />}

        <Trade />

        <Visit />
      </main>

      <Footer />
    </div>
  );
}

export default App;
