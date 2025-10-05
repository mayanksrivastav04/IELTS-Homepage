import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/IELTS_logo.svg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1F2937] text-gray-300 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="IELTS Logo" className="w-32" />
          <p className="text-gray-400 max-w-sm">
            IELTS Institute helps students achieve their dream band scores with
            personalized courses, mock tests, and AI tools.
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="hover:text-white transition cursor-pointer" />
            <FaTwitter className="hover:text-white transition cursor-pointer" />
            <FaInstagram className="hover:text-white transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#home"
                className="hover:text-white transition cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-white transition cursor-pointer"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-white transition cursor-pointer"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p>Email: support@ieltsinstitute.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: 123, ABC Street, Delhi, India</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
