"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className={`fixed left-0 top-0 z-50 w-full px-6 py-5 transition-all duration-500 md:px-20 ${isScrolled ? "bg-[#050816]/70 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex flex-1 justify-start">
          <a href="#" className="font-(--font-playfair) text-2xl text-white">
            AURORA HAVEN
          </a>
        </div>

        {/* Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex gap-8 text-white">
            <li>
              <a href="#story">Story</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#booking">Booking</a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-1 justify-end">
          <Button href="#booking" variant="tertiary">
            Book Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
