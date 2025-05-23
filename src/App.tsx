import { AboutUs } from "./components/AboutUs";
import Address  from "./components/Address";
import Customers from "./components/Customers";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Solution } from "./components/Solution";

function App() {
  return (
    <>
      <Header /> <Hero /> 
      <Customers />
      <Solution />
      <AboutUs />
      <Address />
    </>
  );
}

export default App;
