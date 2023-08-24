import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
