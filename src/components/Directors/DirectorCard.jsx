import React from "react";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon
import Image from "next/image"; // Using Image component for optimized images

const DirectorCard = ({ image, name, position, linkedIn }) => {
  return (
    <div className="w-full sm:w-[300px] h-[500px] rounded-lg overflow-hidden shadow-lg bg-[#FFFFFF] hover:bg-[#1F375D] transition-all duration-300 text-center p-6 flex flex-col justify-between group">
      {/* Circular Profile Image */}
      <div className="w-40 h-40 mx-auto mb-6">
        {" "}
        {/* Increased margin bottom */}
        <Image
          className="rounded-full object-cover"
          src={image}
          alt={`${name}'s photo`}
          width={160}
          height={160}
        />
      </div>

      {/* Name and Position */}
      <div>
        <div className="font-bold text-3xl mb-3 text-[#051D40] group-hover:text-white transition-all duration-300">
          {" "}
          {/* Increased text size */}
          {name}
        </div>
        <p className="text-[#051D40] text-lg group-hover:text-white transition-all duration-300">
          {" "}
          {/* Increased text size */}
          {position}
        </p>
      </div>

      {/* LinkedIn Logo */}
      <div className="pt-6">
        {" "}
        {/* Increased padding top */}
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-blue-600 rounded-full w-14 h-14 hover:text-white hover:bg-blue-600 transition duration-300"
        >
          <FaLinkedin size={40} /> {/* Increased icon size */}
        </a>
      </div>
    </div>
  );
};

export default DirectorCard;
