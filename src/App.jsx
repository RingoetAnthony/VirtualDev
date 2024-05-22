import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <div id="nouveautés">
          <FeatureSection />
        </div>
        <div id="nos activités">
          <Workflow />
        </div>
        <div id="prix">
          <Pricing />
        </div>
        <div id="avis">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
