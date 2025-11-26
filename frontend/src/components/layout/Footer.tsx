import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div>
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 md:mb-12 px-[5%] pt-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
              Shopping Bag
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              Premium products with fast delivery and trusted quality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 mt-5">
              {/* Facebook */}
              <a
                href="#"
                className="hover:text-white transition p-2 -m-2"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl md:text-2xl" />
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="hover:text-white transition p-2 -m-2"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-xl md:text-2xl" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="hover:text-white transition p-2 -m-2"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl md:text-2xl" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="hover:text-white transition p-2 -m-2"
                aria-label="YouTube"
              >
                <BsYoutube className="text-xl md:text-2xl" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a className="hover:text-white" href="#">
                  All Products
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a className="hover:text-white" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Shipping Info
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Return Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a className="hover:text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500 px-[5%] py-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Shopping Bag — All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-neutral-300 transition py-1">
              Terms
            </a>
            <a href="#" className="hover:text-neutral-300 transition py-1">
              Privacy
            </a>
            <a href="#" className="hover:text-neutral-300 transition py-1">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
