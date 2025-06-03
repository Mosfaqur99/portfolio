import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 md:px-20 relative overflow-hidden"
    >
      <h2 className="text-3xl font-semibold text-center mb-12">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start relative z-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p className="text-sm text-gray-300">
              5th Avenue, 35th floor, New York
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <p className="text-sm text-gray-300">yourmail@gmail.com</p>
            <p className="text-sm text-gray-300">yourmail@gmail.com</p>
          </motion.div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Background dots or map could go here as an absolutely positioned background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <img
          src="/your-dotted-map.png" // Replace with correct background image
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactMe;
