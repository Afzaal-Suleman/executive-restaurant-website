"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About" },
    { path: "/menu", name: "Our Menu" },
    { path: "/reservations", name: "Reservations" },
    { path: "/contact-us", name: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-[#D4AF37] tracking-wider">
                Executive
              </span>
              <span className="text-2xl font-serif font-light text-white">
                Restaurant
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm lg:text-base transition-all duration-300 ${
                    pathname === item.path
                      ? "text-[#D4AF37] font-semibold"
                      : "text-white/90 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-[#D4AF37] rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Book a Table Button */}
              <Link
                href="/reservations"
                className="ml-4 flex items-center gap-2 bg-[#D4AF37] text-black px-5 py-2.5 text-sm font-semibold hover:bg-amber-500 transition-all duration-300 rounded-sm"
              >
                <Calendar size={16} />
                <span>Book a Table</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#D4AF37] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base transition-all duration-300 ${
                  pathname === item.path
                    ? "text-[#D4AF37] font-semibold border-l-4 border-[#D4AF37] bg-[#D4AF37]/5"
                    : "text-white/80 hover:text-[#D4AF37] hover:border-l-4 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Book Button */}
            <Link
              href="/reservations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-4 py-3 text-base font-semibold hover:bg-amber-500 transition-all duration-300 rounded-sm mt-6"
            >
              <Calendar size={18} />
              <span>Book a Table</span>
            </Link>
          </div>
        </motion.div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
}