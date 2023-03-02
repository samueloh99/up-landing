import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Cases from "./components/Cases";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-stn">
      <Navbar />

      <Home />

      <About />

      <Work />

      <Cases />

      <Location />

      <Footer />
    </div>
  );
};

export default App;
