import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section with Follow Us */}
        <div>
          {/* Follow Us Section */}
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61567841374029"
              className="hover:opacity-75"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-6 w-6" color="#1877F2" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/edu-momentum-llp"
              className="hover:opacity-75"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6" color="#0A66C2" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/edumomentumllp/"
              className="hover:opacity-75"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-6 w-6" color="#E4405F" />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@EduMomentum"
              className="hover:opacity-75"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-6 w-6" color="#FF0000" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-lightBlue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-lightBlue">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-brands" className="hover:text-lightBlue">
                Our Brands
              </Link>
            </li>
            <li>
              <Link href="/terms-&-condition" className="hover:text-lightBlue">
                Terms & Condition
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:edumomentumllp@gmail.com"
              className="hover:text-lightBlue"
              aria-label="Email"
            >
              edumomentumllp@gmail.com
            </a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919594402916"
              className="hover:text-lightBlue"
              aria-label="Phone"
            >
              +91 95944 02916
            </a>
          </p>
          <p className="text-sm">
            <strong>Address:</strong> Off BKC, Mumbai, India 400070.
          </p>
        </div>
      </div>

      {/* WhatsApp Icon - Sticky / Fixed */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/919594402916"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lightBlue flex items-center"
        >
          <FaWhatsapp className="h-12 w-12" color="#25D366" />
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="bg-darkBlue text-center py-4 border-t border-white">
        <p className="text-sm mb-2">
          Built with ❤️ and passion by{" "}
          <a
            href="https://code4bharat.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue hover:underline"
          >
            Code4Bharat
          </a>
        </p>
        <p className="text-sm">
          &copy; 2011 &ndash; {new Date().getFullYear()} EduMomentum. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
