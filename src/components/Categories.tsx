import { Package, Monitor, Utensils, BookOpen, Shirt, Home } from "lucide-react";

const categories = [
  {
    icon: <Package className="w-8 h-8" />,
    name: "Starter Kits",
    description: "Everything you need to get started",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    name: "Electronics",
    description: "Tech essentials for your studies",
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    name: "Kitchenware",
    description: "Cook and dine in style",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: "Study Materials",
    description: "Tools for academic success",
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    name: "Clothing",
    description: "Weather-appropriate attire",
  },
  {
    icon: <Home className="w-8 h-8" />,
    name: "Room Decor",
    description: "Make your space your own",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-mit-dark mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-mit-red mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-mit-gray">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;