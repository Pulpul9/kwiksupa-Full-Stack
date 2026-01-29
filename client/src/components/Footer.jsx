import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row lg:justify-between gap-6 text-center lg:text-left">
        
        {/* Left: Copyright */}
        <p className="text-sm text-gray-600">
          © 2025. All Rights Reserved.
        </p>

        {/* Middle: Contact Info */}
        <div className="text-sm text-gray-700">
          <p className="font-semibold mb-1">Contact</p>
          <p>📍 Kumhaltole-05, Birgunj</p>
          <p>📧 barnawalsuraj124@gmail.com</p>
          <p>📞 +977-9809144777</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4 justify-center text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61587279509562"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-100 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/kwiksupa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-100 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="hover:text-primary-100 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
