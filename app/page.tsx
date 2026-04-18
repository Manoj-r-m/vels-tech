import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import Register from "./components/Register";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyUs />
        <Register />
        <Contact />
      </main>
    </div>
  );
}
