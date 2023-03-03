import { useRef } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Cases from "./components/Cases";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App = () => {
  const refForm = useRef<HTMLDivElement>(null);
  const refAboutUs = useRef<HTMLDivElement>(null);
  const refWork = useRef<HTMLDivElement>(null);
  const refCases = useRef<HTMLDivElement>(null);

  const handleScroll = (location: string) => {
    if (location === "top") {
      return window.scrollTo(0, 0);
    }
    if (location === "about-us") {
      return refAboutUs.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (location === "work") {
      return refWork.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location === "location") {
      return refForm.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location === "cases") {
      return refCases.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-stn">
      <Navbar handleScroll={handleScroll} />

      <Home handleScroll={handleScroll} />

      <About ref={refAboutUs} />

      <Work ref={refWork} />

      <Cases ref={refCases} />

      <Location ref={refForm} />

      <Footer handleScroll={handleScroll} />
    </div>
  );
};

export default App;
