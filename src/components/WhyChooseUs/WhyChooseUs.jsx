// src/components/WhyChooseUs/WhyChooseUs.jsx
"use client";

import React from "react";
import { FaHandsHelping, FaGlobe, FaLightbulb, FaStar } from "react-icons/fa";

const reasons = [
  {
    title: "Holistic Approach",
    description:
      "At Edu Momentum LLP, we take a holistic approach to education and technology. Through our diverse brands, we offer comprehensive solutions that cater to students, educators, and businesses, ensuring that each stakeholder benefits from our expertise.",
    icon: <FaHandsHelping size={40} />,
  },
  {
    title: "Global Reach",
    description:
      "Our brands have a global presence, working with clients and participants from multiple countries. Whether it’s through ISRC’s international competitions, Code4Bharat’s overseas IT services, or Education.Code4Bharat’s global job placement network, we are truly a global organization.",
    icon: <FaGlobe size={40} />,
  },
  {
    title: "Commitment to Innovation",
    description:
      "Innovation is at the heart of everything we do. From fostering new technologies in education through ISRC to delivering cutting-edge IT solutions with Code4Bharat, we constantly strive to stay ahead of industry trends and provide forward-thinking solutions.",
    icon: <FaLightbulb size={40} />,
  },
  {
    title: "Excellence in Service",
    description:
      "We pride ourselves on delivering excellence in every aspect of our work. Whether it’s ensuring the success of a STEM competition, developing a flawless web application, or placing a student in their dream job, Edu Momentum LLP is committed to exceeding expectations.",
    icon: <FaStar size={40} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-[#DBE2EF] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center text-[#051d40]">
          Edu Momentum: Where Learning Meets Innovation
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-[#051d40] rounded-full"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#252827] text-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 text-[#386E94]">{reason.icon}</div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="flex-1 leading-relaxed text-base sm:text-lg mt-10">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
