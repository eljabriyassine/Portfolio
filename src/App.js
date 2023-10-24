import { Routes } from "./Routes/Routes";

import Hero from "./components/Home/hero/Hero";
import Navbar from "./components/Home/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
// import Test from './Test'

function App() {
  return (
    <div>
      <section id={Routes.HOME}>
        <Navbar />
        <Hero />
      </section>
      <section id={Routes.EDUCATION}>
        <Parallax type="education" />
      </section>
      <section>{<Education />}</section>
      <section id={Routes.PROJECTES}>
        <Parallax type="projects" />
      </section>
      <div>
        <Portfolio />{" "}
      </div>
      <section id={Routes.CONTACT}>{<Contact/>}</section> */}
      {/* {/* <Test/> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;
