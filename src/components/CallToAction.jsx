import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <div className="relative bg-black bg-opacity-60 text-white py-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/your-background.jpg" // Replace with your image path
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-xl"
      >
        <h2 className="text-2xl font-semibold mb-4">Interested to Work?</h2>
        <p className="text-gray-300 mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-emerald-600 transition-colors"
        >
          Contact
        </motion.button>
      </motion.div>
    </div>
  );
}
