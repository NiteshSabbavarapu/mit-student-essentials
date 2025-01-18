import {
  Utensils,
  Sofa,
  Laptop,
  Droplet,
  Bike,
  Wind,
  BookOpen,
  Home,
  Shirt,
  Palette,
  ArrowRightIcon
} from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  {
    icon: <Utensils className="w-8 h-8" />,
    name: "Kitchen Essentials",
    description: "Appliances & accessories for your culinary needs",
    items: "15+ items",
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    name: "Furniture",
    description: "Complete your living space",
    items: "10+ items",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    name: "Electronics",
    description: "Gadgets for academic success",
    items: "12+ items",
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    name: "Bath & Toiletries",
    description: "Personal care essentials",
    items: "8+ items",
  },
  {
    icon: <Bike className="w-8 h-8" />,
    name: "Bicycle & Gear",
    description: "Campus transportation made easy",
    items: "5+ items",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    name: "Winter Essentials",
    description: "Stay warm in Cambridge",
    items: "8+ items",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: "Academic Supplies",
    description: "Tools for learning",
    items: "10+ items",
  },
  {
    icon: <Home className="w-8 h-8" />,
    name: "Home Necessities",
    description: "Dorm room basics",
    items: "12+ items",
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    name: "Social Wear",
    description: "Rental clothing for events",
    items: "6+ items",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Custom Merchandise",
    description: "Event-specific gear",
    items: "4+ items",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mit-dark mb-4">Shop by Category</h2>
          <p className="text-mit-gray max-w-2xl mx-auto">
            Everything you need for campus life, carefully curated and organized into convenient categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 bg-white animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-mit-red mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-mit-gray mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-mit-red">{category.items}</span>
                <Button variant="ghost" size="sm" className="text-mit-red hover:text-mit-red/90">
                  Browse
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;