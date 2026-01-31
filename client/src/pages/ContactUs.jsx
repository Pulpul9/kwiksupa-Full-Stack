import React from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaFacebook,
  FaInstagram
} from "react-icons/fa"

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700">
          Contact kwiksupa
        </h1>
        <p className="text-gray-600 mt-2">
          We’re here to help you with your grocery needs 🛒
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Contact Info */}
          <div className="space-y-5 text-gray-700">
            
            <div className="flex items-start gap-4">
              <FaUser className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Name</p>
                <p>Suraj Kumar Barnawal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Contact Number</p>
                <p>+977-9809144777</p>
                <p>+977-9865312160</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>kwiksupa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  Kumhaltole - 05,<br />
                  Birgunj, Parsa,<br />
                  Nepal
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="font-semibold mb-2">Follow Us</p>
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://www.facebook.com/profile.php?id=61587279509562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/kwiksupa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Help Box */}
          <div className="bg-green-50 rounded-lg p-6 flex flex-col justify-center text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Need Help?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Contact us for orders, delivery updates, or support.
            </p>

            <p className="text-sm text-gray-700">📞 Call or WhatsApp anytime</p>
            <p className="text-sm text-gray-700">📧 Email us for assistance</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs
