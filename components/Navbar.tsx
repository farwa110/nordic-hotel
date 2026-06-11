// "use client";

// import { motion } from "motion/react";
// import { useEffect, useState } from "react";
// import Button from "./Button";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setIsScrolled(window.scrollY > 40);
//     }

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className={`fixed left-0 top-0 z-50 w-full px-6 py-5 transition-all duration-500 md:px-20 ${isScrolled ? "bg-[#050816]/70 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
//       <div className="flex items-center">
//         {/* Logo */}
//         <div className="flex flex-1 justify-start">
//           <a href="/" className="font-(--font-playfair) text-2xl text-white">
//             AURORA HAVEN
//           </a>
//         </div>

//         {/* Navigation */}
//         <div className="hidden flex-1 justify-center md:flex">
//           <ul className="flex gap-8 text-white">
//             <li>
//               <a href="/#story">Story</a>
//             </li>
//             <li>
//               <a href="/#rooms">Rooms</a>
//             </li>
//             <li>
//               <a href="/#experience">Experience</a>
//             </li>
//           </ul>
//         </div>

//         {/* CTA */}
//         <div className="flex flex-1 justify-end">
//           <Button href="/room-grid" variant="tertiary">
//             Book Now
//           </Button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Story", href: "/#story" },
    { label: "Rooms", href: "/#rooms" },
    { label: "Experience", href: "/#experience" },
  ];

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className={`fixed left-0 top-0 z-50 w-full px-5 py-4 transition-all duration-500 md:px-20 md:py-5 ${isScrolled || isMenuOpen ? "bg-[#050816]/70 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-(--font-playfair) text-xl tracking-wide text-white sm:text-2xl" onClick={() => setIsMenuOpen(false)}>
          AURORA HAVEN
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 text-white md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/room-grid" variant="tertiary">
            Book Now
          </Button>
        </div>

        {/* Mobile Burger */}
        <button type="button" onClick={() => setIsMenuOpen((prev) => !prev)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md md:hidden" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -12, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -12, height: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden md:hidden">
            <div className="mt-5 rounded-3xl border border-white/10 bg-[#050816]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <ul className="flex flex-col gap-4 text-lg text-white">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="block rounded-2xl px-4 py-3 transition-colors hover:bg-white/10">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Button href="/room-grid" variant="tertiary">
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
