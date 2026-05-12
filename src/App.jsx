import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import About from "./components/aboutsection";
import WhyChooseUs from "./components/whychooseus";


export default function App() {
  return (
    <div className="min-h-screen bg-[#060b12]">
      <Navbar />
   <Hero/>
   <About/>
   <WhyChooseUs/>
    </div>
  );
}