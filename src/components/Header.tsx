import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-mit-red font-bold text-xl">MIT Marketplace</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#categories" className="text-mit-dark hover:text-mit-red transition-colors">
              Categories
            </a>
            <a href="#how-it-works" className="text-mit-dark hover:text-mit-red transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-mit-dark hover:text-mit-red transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-mit-dark hover:text-mit-red transition-colors">
              Testimonials
            </a>
            <Button variant="ghost" className="text-mit-dark hover:text-mit-red">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button className="bg-mit-red hover:bg-mit-red/90">
              <User className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#categories"
                className="text-mit-dark hover:text-mit-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </a>
              <a
                href="#how-it-works"
                className="text-mit-dark hover:text-mit-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-mit-dark hover:text-mit-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-mit-dark hover:text-mit-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-mit-dark hover:text-mit-red">
                  <ShoppingCart className="w-5 h-5" />
                </Button>
                <Button className="bg-mit-red hover:bg-mit-red/90">
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;