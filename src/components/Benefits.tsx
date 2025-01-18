import { Clock, DollarSign, Heart, Shield } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save Time",
    description: "Skip the hassle of shopping around. Get everything you need in one place.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Save Money",
    description: "Exclusive student discounts and bundle deals save you up to 30%.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trusted Quality",
    description: "All products are vetted and recommended by MIT students.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Student-First",
    description: "Curated specifically for MIT students' needs and preferences.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-mit-dark mb-12">
          Why Choose MIT Marketplace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-mit-red mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-mit-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;