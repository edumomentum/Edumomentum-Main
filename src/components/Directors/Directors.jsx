import React from "react";
import DirectorCard from "./DirectorCard";

const Directors = () => {
  const directors = [
    {
      name: "Prashant Patil",
      position: "CEO & Founder",
      image: "/directors/prashantpatil.png",
      linkedIn:
        "https://www.linkedin.com/in/prashant-patil-04642219b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Awab Fakih",
      position: "CAO & Founder",
      image: "/directors/awabfakih.png",
      linkedIn:
        "https://www.linkedin.com/in/awabfakih?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Neha Fakih",
      position: "CFO & Founder",
      image: "/directors/nehafakih.png",
      linkedIn:
        "https://www.linkedin.com/in/neha-mehnaz-awab-fakih-2359a189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ayaan Raaje",
      position: "CMO & Founder",
      image: "/directors/ayaanraaje.png",
      linkedIn:
        "https://www.linkedin.com/in/raje-ayaan-327593229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <section className="bg-[#4A9BD3] py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#051d40]">
          Masterminds
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-[#051d40] rounded-full"></div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <DirectorCard
              key={index}
              name={director.name}
              position={director.position}
              image={director.image}
              linkedIn={director.linkedIn}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directors;
