import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  // Set the active link based on the current route when the component mounts
  useEffect(() => {
    // Set active link to the current pathname (current route)
    setActiveLink(window.location.pathname);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleLinkClick = (path) => {
    if (path === "/") {
      // For home link, force a page reload to ensure state update
      setActiveLink("/");
      window.location.href = "/";
    } else {
      // For other links, just update the active link state
      setActiveLink(path);
    }
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo aligned to the left-most */}
          <div className="flex-shrink-0 mr-auto">
            <Link href="/" passHref>
              <Image
                src="/images/edulogo.png"
                alt="EduMomentum Logo"
                width={270}
                height={270}
                className="object-contain cursor-pointer"
                onClick={() => handleLinkClick("/")} // Handle link click for logo
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/" ? "underline text-blue-600" : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/about-us"
                  ? "underline text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/about-us")}
            >
              About Us
            </Link>
            <Link
              href="/our-brands"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/our-brands"
                  ? "underline text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/our-brands")}
            >
              Our Brands
            </Link>
            <Link
              href="/our-masterminds"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/our-masterminds"
                  ? "underline text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/our-masterminds")}
            >
              Masterminds
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon: Menu Open/Close */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/" ? "underline text-blue-600" : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/")} // Close menu on link click
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/about-us"
                  ? "underline text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/about-us")}
            >
              About Us
            </Link>
            <Link
              href="/our-brands"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/our-brands"
                  ? "underline text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/our-brands")}
            >
              Our Brands
            </Link>
            <Link
              href="/our-masterminds"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors duration-300 ${
                activeLink === "/our-masterminds"
                  ? "underline text-blue-600"
                  : "text-gray-800"
              }`}
              onClick={() => handleLinkClick("/our-masterminds")}
            >
              Masterminds
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
