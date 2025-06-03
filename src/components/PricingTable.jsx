import { motion } from "framer-motion";
import { FaCalendarAlt, FaFileAlt, FaHourglassHalf } from "react-icons/fa";

const plans = [
  {
    icon: <FaCalendarAlt size={28} />,
    title: "Full-time work",
    subtitle: "I am available for full time",
    price: "$1500",
    features: [
      "Web Development",
      "Advertising",
      "Game Development",
      "Music Writing",
    ],
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Fixed Price Project",
    subtitle: "I am available for fixed roles",
    price: "$500",
    features: [
      "Web Development",
      "Advertising",
      "Game Development",
      "Music Writing",
    ],
  },
  {
    icon: <FaHourglassHalf size={28} />,
    title: "Hourly work",
    subtitle: "I am available for Hourly projects",
    price: "$50",
    features: [
      "Web Development",
      "Advertising",
      "Game Development",
      "Music Writing",
    ],
  },
];

const PricingCard = ({ icon, title, subtitle, price, features }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-900 text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center max-w-sm"
  >
    <div className="text-emerald-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
    <p className="text-emerald-400 text-3xl font-bold mb-4">{price}</p>
    <ul className="text-sm text-gray-300 space-y-1 mb-6">
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
    <button className="bg-emerald-500 px-4 py-2 rounded-full text-white font-medium hover:bg-emerald-600 transition">
      Hire Me
    </button>
  </motion.div>
);

const PricingTable = () => (
  <section
    id="pricing"
    className="bg-zinc-950 py-20 px-4 text-white text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-2xl font-semibold mb-12"
    >
      Pricing Table
    </motion.h2>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  </section>
);

export default PricingTable;
