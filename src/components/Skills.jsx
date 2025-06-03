import React from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "JavaScript", level: 80 },
  { name: "Java", level: 60 },
  { name: "Python", level: 50 },
  { name: "PHP", level: 30 },
];

const professionalSkills = [
  { name: "Communication", level: 95 },
  { name: "Team Work", level: 85 },
  { name: "Project Management", level: 80 },
  { name: "Creativity", level: 60 },
];

const Circle = ({ percent }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg width="100" height="100" className="transform -rotate-90">
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#444"
        strokeWidth="8"
        fill="none"
      />
      {/* Foreground Animated Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#0ee6b7"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference * (1 - percent / 100) }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Percentage Label */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="18"
        fill="#fff"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-24 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Skills Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <motion.div
                    className="bg-teal-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Professional Skills</h3>
          <div className="grid grid-cols-2 gap-10">
            {professionalSkills.map((skill, index) => (
              <div key={skill.name} className="flex flex-col items-center">
                <Circle percent={skill.level} />
                <p className="mt-4 text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
