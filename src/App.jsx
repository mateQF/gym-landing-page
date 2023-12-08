import Header from "./components/Header";
import Home from "./components/Home";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div id="#home">
      <Header />

      <main>
        <section>
          <Home />
        </section>

        <section id="#plans">
          <Plans />
        </section>

        <section id="#about">
          <About />
        </section>

        <section id="#trainers">
          <Trainers />
        </section>

        <section id="#contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
