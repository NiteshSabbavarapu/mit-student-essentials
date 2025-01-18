import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Categories />
        <HowItWorks />
        <Benefits />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;