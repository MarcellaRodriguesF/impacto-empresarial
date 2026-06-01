import { AboutUs } from "./components/AboutUs";
import Address from "./components/Address";
import { CtaBanner } from "./components/CtaBanner";
import Customers from "./components/Customers";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Solution } from "./components/Solution";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Customers />
        <Solution />
        <AboutUs />
        <Testimonials />
        <CtaBanner />
      </main>
      <Address />
    </>
  );
}

export default App;
