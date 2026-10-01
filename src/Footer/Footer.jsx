
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo / About */}
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                WebX
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Build modern, beautiful and powerful digital experiences with
              our premium web solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-400"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Resources</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Community
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Stay Updated
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Subscribe to our newsletter and get the latest updates.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-slate-700 bg-slate-900 p-1">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-5 text-sm font-semibold transition hover:opacity-90">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} WebX. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="transition hover:text-white">
              Cookies
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
