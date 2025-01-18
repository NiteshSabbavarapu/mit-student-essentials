import { Clock, DollarSign, Heart, Shield, Globe, Users } from "lucide-react";

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
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Cultural Inclusive",
    description: "Region-specific packages available for international students.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Driven",
    description: "Powered by student feedback and recommendations.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mit-dark mb-4">Why Choose MIT Marketplace?</h2>
          <p className="text-mit-gray max-w-2xl mx-auto">
            We're more than just a marketplace. We're your partner in making campus life easier and more affordable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors animate-fadeIn"
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