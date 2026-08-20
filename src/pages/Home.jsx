import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PowerfulFeatures from "../components/PowerfulFeatures";
import CompatibilityColors from "../components/CompatibilityColors";
import TrustBar from "../components/TrustBar";
import ProductCTA from "../components/ProductCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <PowerfulFeatures />

      <CompatibilityColors />
      <TrustBar />
      <ProductCTA />
      <Footer />
    </main>
  );
}

export default Home;