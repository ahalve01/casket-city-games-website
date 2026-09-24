import "./App.css";
import { SHOW_INVENTORY } from "./config";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GrandOpening from "./components/GrandOpening";
import Events from "./components/Events";
import Shop from "./components/Shop";
import Inventory from "./components/Inventory";
import Trade from "./components/Trade";
import BuybackPolicy from "./components/BuybackPolicy";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { useSiteRouting } from "./routing";

function App() {
  const { path, onNavigate } = useSiteRouting();

  return (
    <div className="site" onClick={onNavigate}>
      <Navbar key={path} homePath={path === "/" ? "" : "/"} />

      <main tabIndex={-1}>
        {path === "/buyback" ? (
          <BuybackPolicy />
        ) : path === "/events" ? (
          <Events fullPage />
        ) : (
          <>
            <Hero />

            <GrandOpening />

            <Events />

            <Shop />

            {SHOW_INVENTORY && <Inventory />}

            <Trade />

            <Visit />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
