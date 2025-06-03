// components/ClientReviews.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "John Mike",
    title: "CEO, Authoric Inc",
    quote:
      "Absolute wonderful! I am completely blown away. The very best I was amazed at the quality",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Mike",
    title: "CEO, Authoric Inc",
    quote:
      "Absolute wonderful! I am completely blown away. The very best I was amazed at the quality",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Mike",
    title: "CEO, Authoric Inc",
    quote:
      "Absolute wonderful! I am completely blown away. The very best I was amazed at the quality",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-gray-900 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Client Reviews</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials
          .slice(currentIndex, currentIndex + 3)
          .map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-green-400 mb-4"
              />
              <p className="text-sm italic mb-4">{testimonial.quote}</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </motion.div>
          ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {[0, 1].map((index) => (
          <button key={index} onClick={() => setCurrentIndex(index)}>
            <FaCircle
              className={`text-xs ${
                currentIndex === index ? "text-green-400" : "text-gray-500"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
