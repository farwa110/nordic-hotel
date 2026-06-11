"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    quote: "Aurora Haven felt like stepping into another world. The views, the silence, and the sauna experience were unforgettable.",
    name: "Emma Larsen",
    location: "Copenhagen, Denmark",
  },
  {
    quote: "Every detail felt intentional — from the breakfast to the room design. A peaceful luxury escape surrounded by nature.",
    name: "Jonas Berg",
    location: "Oslo, Norway",
  },
  {
    quote: "Watching the Northern Lights from our suite was magical. It was private, calm, and beautifully designed.",
    name: "Sofia Müller",
    location: "Berlin, Germany",
  },
  {
    quote: "The breakfast overlooking the mountains was incredible. Every morning felt peaceful, private, and thoughtfully curated.",
    name: "Isabella Rossi",
    location: "Milan, Italy",
  },
  {
    quote: "From the warm sauna to the panoramic lake views, every moment felt like a true escape from everyday life.",
    name: "Lucas Andersen",
    location: "Stockholm, Sweden",
  },
  {
    quote: "Aurora Haven perfectly blends Scandinavian design with nature. Watching the stars from our suite was unforgettable.",
    name: "Charlotte Williams",
    location: "London, United Kingdom",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white md:px-20">
      {/* Video */}
      <video className="absolute inset-0 h-full w-full object-cover" src="/videos/aurora-hero.mp4" autoPlay muted loop playsInline />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#050816]/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Guest Stories</p>

        <h2 className="aurora-text mt-4 text-center font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white">Moments They Remember</h2>

        {/* Arrows */}
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={prev} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md transition hover:border-[#D4AF37]">
            <ChevronLeft size={20} />
          </button>

          <button onClick={next} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md transition hover:border-[#D4AF37]">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Single Card */}
        <div className="mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.article key={current} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-white/10 bg-[#08101f]/70 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-md">
              {/* Stars */}
              <div className="flex gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-5xl text-[#D4AF37]">“</p>

              <p className="mt-6 text-xl leading-9 text-white/90">{testimonials[current].quote}</p>

              {/* User */}
              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7FFFD4]/20 bg-[#7FFFD4]/10">
                  <UserRound size={24} className="text-[#7FFFD4]" />
                </div>

                <div>
                  <p className="font-semibold text-lg text-white">{testimonials[current].name}</p>

                  <p className="text-white/60">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
