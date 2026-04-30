import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import About from "./components/aboutsection";


export default function App() {
  return (
    <div className="min-h-screen bg-[#060b12]">
      <Navbar />
   <Hero/>
   <About/>
    </div>
  );
}