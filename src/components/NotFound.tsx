"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Clock } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Construction size={80} className="text-gold" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Clock size={24} className="text-gold" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-4"
        >
          Page Under
          <span className="text-gold">Construction</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          We&aposre working hard to bring you something extraordinary. 
          This page is currently being prepared with the same care and 
          attention to detail you expect from Executive Restaurant.
        </motion.p>

        {/* Estimated completion */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gray-50 border border-gold/20 rounded-lg p-6 mb-10 max-w-md mx-auto"
        >
          <p className="text-gray-700 mb-2 font-semibold">Expected Launch</p>
          <p className="text-2xl font-serif text-gold">Coming Soon</p>
          <p className="text-sm text-gray-500 mt-2">We appreciate your patience</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-gold text-black px-8 py-4 text-lg font-semibold hover:bg-amber-500 transition-all duration-300 rounded-sm"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <Link
            href="/reservations"
            className="flex items-center gap-2 border-2 border-gold text-gold px-8 py-4 text-lg font-semibold hover:bg-gold hover:text-black transition-all duration-300 rounded-sm"
          >
            Book a Table
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center gap-4 text-gray-400"
        >
          <span className="w-2 h-2 bg-gold rounded-full"></span>
          <span className="w-2 h-2 bg-gold rounded-full"></span>
          <span className="w-2 h-2 bg-gold rounded-full"></span>
        </motion.div>
      </div>
    </div>
  );
}