import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Sharma",
    review:
      "This institute helped me improve my IELTS score from 6.5 to 8.0! The mock tests and speaking practice were amazing.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit Verma",
    review:
      "AI Band Score feature is super helpful. I knew exactly where to improve before the real test.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    review:
      "Friendly teachers and great resources. Highly recommend for anyone preparing for IELTS.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What Our Students Say
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-6 mb-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 max-w-sm mx-auto"
            >
              <FaQuoteLeft className="text-3xl text-[#C7002B] mb-4" />

              <p className="text-gray-700 italic mb-4">{testimonial.review}</p>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold text-gray-800">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#C7002B] text-white px-6 py-3 rounded-md text-lg hover:bg-red-700 transition active:scale-95 cursor-pointer">
          Explore All Reviews
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
