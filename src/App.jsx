import HeroSection1 from "./components/Hero copy.jsx";
import Navbar from "./components/navbar";
import HeroSection from "./components/Hero.jsx";
import Clubstats from "./components/clubstats.jsx";
import CardContainer from "./components/card_group.jsx";
import Footer from "./components/footer.jsx";

import './App.css'; // Import the CSS file

export default function App() {
  return (
    <>
      <Navbar />

      <HeroSection1 />
      <h2 className="text-4xl font-bold tracking-tight leading-none text-center text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x">
          Our Perks
        </span>
      </h2>
      <CardContainer />

      <HeroSection />
      
      <Clubstats />
      <Footer />

    </>
  );
}
