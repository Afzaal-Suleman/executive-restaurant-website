"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

// Dummy image URLs (using free placeholder images from Google-friendly sources)
const heroBg =
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600";
const aboutImg =
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const menuItems = [
  {
    name: "Grilled Lobster",
    desc: "Fresh Atlantic lobster with garlic butter and herbs",
    img: "https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Wagyu Steak",
    desc: "Japanese A5 Wagyu served with truffle mash",
    img: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Truffle Pasta",
    desc: "Handmade fettuccine with black truffle cream",
    img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Golden Dessert",
    desc: "Gold leaf chocolate mousse with raspberry",
    img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const galleryImages = [
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3490366/pexels-photo-3490366.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&w=600",
];
const testimonials = [
  {
    name: "James R.",
    rating: 5,
    text: "Impeccable service and the most exquisite dining experience. The wagyu melted in my mouth.",
  },
  {
    name: "Sophia L.",
    rating: 5,
    text: "Perfect atmosphere for a romantic dinner. The wine selection is world-class.",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Hosted our anniversary here. Private dining was elegant and the staff went above and beyond.",
  },
];

export default function HomeCom() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            Experience Fine Dining <br /> at{" "}
            <span className="text-gold">Executive Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A culinary journey crafted with passion and precision
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-10 py-4 text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-amber-500 transition"
          >
            Book a Table <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">
              Our <span className="text-gold">Legacy</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since 1995, Executive Restaurant has been a symbol of culinary
              excellence. Our award-winning chefs blend tradition with
              innovation, using only the finest ingredients to create
              unforgettable dining experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Housed in a landmark building, our interior reflects timeless
              elegance—marble floors, crystal chandeliers, and intimate
              lighting that sets the stage for exceptional meals.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <img
              src={aboutImg}
              alt="Restaurant interior"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Signature <span className="text-gold">Dishes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse of our chef's masterpieces. Each plate tells a story of
            flavor and artistry.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-gold text-gold px-10 py-4 text-lg font-semibold hover:bg-gold hover:text-black transition"
          >
            View Full Menu
          </motion.button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-center mb-16 text-gray-900"
        >
          Visual <span className="text-gold">Elegance</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg h-64"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Private Dining */}
      <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">
            Private Dining & <span className="text-gold">Events</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Host your special occasions in our exclusive private rooms.
            Personalized menus, dedicated sommelier, and elegant ambiance for
            corporate events, weddings, and intimate gatherings.
          </p>
          <button className="border border-gold text-gold px-10 py-4 text-lg font-semibold hover:bg-gold hover:text-black transition">
            Inquire Now
          </button>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-4 text-gray-900">
            Reserve <span className="text-gold">Your Table</span>
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We look forward to hosting you. Please fill the form below.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-gold"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-gold"
            />
            <input
              type="date"
              className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-gold"
            />
            <input
              type="time"
              className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-gold"
            />
            <select className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-gold">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
            <div className="md:col-span-2 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold text-black px-12 py-4 text-lg font-semibold hover:bg-amber-500 transition w-full md:w-auto"
              >
                Reserve Table
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-center mb-16 text-gray-900"
        >
          Guest <span className="text-gold">Impressions</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg rounded"
            >
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.text}"</p>
              <p className="font-bold text-gray-900">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">
              Location & <span className="text-gold">Hours</span>
            </h2>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-gold mt-1" />
              <div>
                <p className="font-semibold">Executive Restaurant</p>
                <p className="text-gray-600">123 Gourmet Avenue, Culinary District, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <Clock className="text-gold mt-1" />
              <div>
                <p className="font-semibold">Opening Hours</p>
                <p className="text-gray-600">Monday - Friday: 5:00 PM - 11:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gold mt-1" />
              <div>
                <p className="font-semibold">Reservations</p>
                <p className="text-gray-600">+1 (212) 555-7890</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-80 bg-gray-300 rounded-lg overflow-hidden"
          >
            {/* Google Maps placeholder - embed iframe or static image */}
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1614918456421!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Executive Restaurant</h3>
            <p className="text-sm">Culinary excellence since 1995. Every meal is a masterpiece.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition">Menu</a></li>
              <li><a href="#" className="hover:text-gold transition">Gallery</a></li>
              <li><a href="#" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-2"><Phone size={16} /> +1 (212) 555-7890</div>
            <div className="flex items-center gap-2 text-sm"><Mail size={16} /> reservations@executive.com</div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Instagram className="hover:text-gold cursor-pointer" />
              <Facebook className="hover:text-gold cursor-pointer" />
              <Twitter className="hover:text-gold cursor-pointer" />
              <Youtube className="hover:text-gold cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Executive Restaurant. All rights reserved.
        </div>
      </footer>
    </div>
  );
}