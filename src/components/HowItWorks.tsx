import { CheckCircle, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Choose Your Package",
    description: "Select from our curated bundles or create your own custom package",
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Verify MIT Status",
    description: "Quick verification with your MIT credentials for exclusive access",
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Get It Delivered",
    description: "Convenient delivery to your dorm or preferred location",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-mit-dark mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-mit-red mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-mit-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;