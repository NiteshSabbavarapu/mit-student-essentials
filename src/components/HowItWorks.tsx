import { CheckCircle, Package, Truck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "MIT Verification",
    description: "Sign in with your MIT credentials for exclusive access to student deals",
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Choose Your Package",
    description: "Select from curated bundles or create your own custom package",
  },
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: "One-Click Checkout",
    description: "Secure payment powered by firmly.ai for a seamless experience",
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Fast Delivery",
    description: "Get your items delivered right to your dorm or preferred location",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mit-dark mb-4">How It Works</h2>
          <p className="text-mit-gray max-w-2xl mx-auto">
            Getting started with MIT Marketplace is easy. Follow these simple steps to get everything you need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm animate-fadeIn"
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