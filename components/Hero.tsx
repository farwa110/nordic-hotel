"use client";

import { motion } from "motion/react";
import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Navbar />

      <video className="absolute inset-0 h-full w-full object-cover" src="/videos/aurora-hero.mp4" autoPlay muted loop playsInline />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-[#050816]" />

      <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
          <p className="mb-4 tracking-[0.4em] text-sky-300 uppercase">Nordic Luxury Retreat</p>

          <h2 className="mb-6 font-(--font-playfair) text-6xl text-white md:text-8xl">
            Escape Into
            <br />
            Nordic Luxury
          </h2>

          <p className="mb-8 max-w-xl text-lg text-white/80">Experience the magic of the Northern Lights from your private retreat surrounded by nature, comfort and elegance.</p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#booking" variant="primary">
              Book Your Stay
            </Button>

            <Button href="#rooms" variant="tertiary">
              Explore Rooms
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
