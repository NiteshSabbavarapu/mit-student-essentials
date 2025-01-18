const testimonials = [
  {
    name: "Sarah Chen",
    role: "International Student",
    text: "MIT Marketplace made my transition to campus so much easier. Everything I needed was just a click away!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "James Wilson",
    role: "Freshman Student",
    text: "The starter kit saved me hours of shopping and hundreds of dollars. Highly recommended!",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    name: "Maria Rodriguez",
    role: "Graduate Student",
    text: "The quality of products and the convenience of delivery made my move-in experience stress-free.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-mit-dark mb-12">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-mit-gray italic mb-4">{testimonial.text}</p>
                <h3 className="font-semibold text-mit-dark">{testimonial.name}</h3>
                <p className="text-sm text-mit-gray">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;