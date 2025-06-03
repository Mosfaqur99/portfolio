import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const education = [
  {
    title: "Art & Multimedia",
    school: "Oxford University",
    year: "2005-2008",
    description:
      "It is a long established fact that a reader will be distracted...",
  },
  {
    title: "Art & Multimedia",
    school: "Oxford University",
    year: "2008-2010",
    description:
      "It is a long established fact that a reader will be distracted...",
  },
  {
    title: "Art & Multimedia",
    school: "Oxford University",
    year: "2010-2012",
    description:
      "It is a long established fact that a reader will be distracted...",
  },
];

const work = [
  {
    title: "UI/UX Designer",
    company: "IronSketch",
    year: "2005-2008",
    responsibilities: ["Responsive UI", "Validate CSS", "Project Management"],
  },
  {
    title: "Art & Multimedia",
    company: "Oxford University",
    year: "2008-2010",
    responsibilities: ["Validate CSS", "Project Management"],
  },
  {
    title: "Art & Multimedia",
    company: "Oxford University",
    year: "2010-2012",
    responsibilities: ["Validate CSS", "Project Management"],
  },
];

export default function Experience() {
  return (
    <section
      className="bg-black text-white py-24 px-6 md:px-20"
      id="experience"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Experience & Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1c1c1c] rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white">
                  {item.title} From{" "}
                  <span className="text-teal-400">{item.school}</span>
                </h4>
                <p className="text-sm text-gray-400 mt-1">{item.year}</p>
                <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Work Experience</h3>
          <div className="space-y-6">
            {work.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1c1c1c] rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white">
                  {item.title}{" "}
                  <span className="text-teal-400"> {item.company}</span>
                </h4>
                <p className="text-sm text-gray-400 mt-1">{item.year}</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-300">
                  {item.responsibilities.map((r, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCircle className="text-teal-400 text-[6px]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
