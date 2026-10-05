
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SiGooglesummerofcode } from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "About", href: "#about" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="relative flex items-center justify-between px-5 py-3
          rounded-2xl border border-white/10
          bg-black/50 backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,0.35)]">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl
            bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5
            pointer-events-none" />

                    {/* Logo */}
                    <a href="#" className="relative flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl
              bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
              flex items-center justify-center
              shadow-lg shadow-purple-500/30
              group-hover:rotate-6 transition duration-300">

                            <SiGooglesummerofcode size={35} className="text-white" />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-white">
                                UIScodehelp
                            </h1>

                            <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500">
                                Premium website template
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm text-gray-400
                  hover:text-white rounded-xl
                  transition duration-300
                  hover:bg-white/5 group"
                            >
                                {link.name}

                                <span className="absolute bottom-1 left-1/2
                  w-0 h-[2px] rounded-full
                  bg-gradient-to-r from-blue-500 to-purple-500
                  group-hover:w-1/2 group-hover:left-1/4
                  transition-all duration-300" />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            className="px-4 py-2 text-sm text-gray-300
                hover:text-white transition"
                        >
                            Login
                        </button>

                        <button
                            className="group flex items-center gap-2
                px-5 py-2.5 rounded-xl
                text-sm font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-500 hover:to-pink-500
                shadow-lg shadow-purple-500/20
                hover:shadow-purple-500/40
                transition-all duration-300"
                        >
                            <MdOutlineShoppingCart size={22} />

                            <ArrowUpRight
                                size={16}
                                className="group-hover:translate-x-1
                  group-hover:-translate-y-1 transition"
                            />
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden w-10 h-10 flex items-center justify-center
              rounded-xl bg-white/5 border border-white/10
              text-white"
                    >
                        {open ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden mt-2 p-4 rounded-2xl
            border border-white/10
            bg-black/80 backdrop-blur-2xl
            shadow-2xl">

                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-3 rounded-xl
                    text-gray-300 hover:text-white
                    hover:bg-white/5 transition"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <button className="w-full py-3 text-gray-300">
                                Login
                            </button>

                            <button className="w-full items-center justify-center flex mt-2 py-3 rounded-xl
                                                font-semibold text-white
                                                bg-gradient-to-r from-blue-600 to-purple-600
                            ">
                                <MdOutlineShoppingCart size={25} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;