import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/images/yugrow.png"
                alt="YUGROW Logo"
                className="h-16 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-xs text-orange-300 italic font-medium">
                  Friendly . Creative . Professional
                </div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering professionals across Africa with personalised career
              coaching, group training, and social impact programs. Grow with
              confidence and clarity.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@yugrowcareers.co.ke</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/yugrow"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  YuGrow (1:1 Coaching)
                </Link>
              </li>
              <li>
                <Link
                  href="/wegrow"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  WeGrow (Group Training)
                </Link>
              </li>
              <li>
                <Link
                  href="/allgrow"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  AllGrow (Social Impact)
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#book-consultation"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/about#speaking"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Speaking Engagements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Yugrow Careers Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
