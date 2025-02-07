import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Socail = [
  { lable: "Twitter", icon: <FaTwitter />, href: "/" },
  { lable: "Instagram", icon: <FaInstagram />, href: "/" },
  { lable: "YouTube", icon: <FaYoutube />, href: "/" },
];
export default function Footer() {
  return (
    <footer className="bg-[#f4eae5] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <Image
                  src="/Logo.png"
                  alt="Travel Agents Logo"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <p className="text-text-gray text-sm leading-relaxed">
              We believe brand interaction is key in commu- nication. Real
              innovations and a positive.
            </p>
            <div className="flex space-x-4">
              {Socail.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-icon-orange hover:text-primary-orange transition-colors"
                >
                  <span className="sr-only">{item.lable}</span>
                  <span className="w-6 h-6">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Core values
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Partner w/ us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              About us
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Get in touch
            </h3>
            <ul className="space-y-4 mb-6">
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Support center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-gray text-[13px] hover:text-primary-orange transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email here..."
                className="bg-primary-orange/10 p-2 border-icon-lightGray placeholder:text-icon-gray w-full"
              />
              <button
                type="submit"
                className="w-full bg-button hover:bg-button/90 p-3 text-white"
              >
                Get Access
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-icon-lightGray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-gray text-sm">
              TravelAgent © 2022 All Right Reserved
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-text-gray text-[13px] hover:text-primary-orange transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-text-gray text-[13px] hover:text-primary-orange transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
