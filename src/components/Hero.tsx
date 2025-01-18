import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-mit-dark">
              Your One-Stop Shop for MIT Essentials
            </h1>
            <p className="text-lg text-mit-gray">
              Save time and money with curated packages designed specifically for MIT students.
              Get everything you need, delivered right to your door.
            </p>
            <button className="bg-mit-red text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition-colors">
              <span>Shop Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Student shopping experience"
              className="rounded-lg shadow-xl animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;