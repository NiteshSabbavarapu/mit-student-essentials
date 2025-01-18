import { ArrowRight, Package, Shield, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fadeIn">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-mit-red bg-opacity-10 text-mit-red">
              <span>Exclusive to MIT Students</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mit-dark leading-tight">
              Your One-Stop Shop for MIT Essentials
            </h1>
            <p className="text-lg text-mit-gray max-w-xl">
              Save time and money with curated packages designed specifically for MIT students.
              Get everything you need, delivered right to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mit-red hover:bg-mit-red/90">
                <span>Shop Now</span>
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <Package className="text-mit-red" />
                <span className="text-sm font-medium">Curated Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-mit-red" />
                <span className="text-sm font-medium">Student Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-mit-red" />
                <span className="text-sm font-medium">Exclusive Deals</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-mit-red/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Student essentials"
              className="rounded-3xl shadow-2xl relative z-10 animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;