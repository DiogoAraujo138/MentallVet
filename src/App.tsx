import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Services from "./components/sections/Services";
import Training from "./components/sections/Training";
import Metrics from "./components/sections/Metrics";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Services />
        <Training />
        <Metrics />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
