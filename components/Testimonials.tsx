"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getTestimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types/testimonial";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]); /**STEP 1: use state testimonials array start main empty state phir setTestimonials jab array load ho jaye tou save it here */

  const [current, setCurrent] = useState(0); /**STEP 2: use state current index for testimonial navigation  ya phir setTestimonials jab array load ho jaye tou save it here */

  useEffect(() => {
    /* STEP 3: useEffect hook to load testimonials when the component mounts from supabse database asyn function ,await promise jab fetch hojaye to save it here and load testimonials   */
    async function loadTestimonials() {
      const data = await getTestimonials();
      setTestimonials(data);
    }

    loadTestimonials();
  }, []);
  /*STEP 4: Agr testimonials array loaded, set up auto-rotation , auto loop animation har 5000ms per testimonials khud change hojaye UI per interactivity keliye*/
  useEffect(() => {
    if (testimonials.length === 0) return;
    /*STEP 5: IF testimonils array is empty 0 so stop here donot execute auto-rotation code below timer wagera */
    const timer = setInterval(() => {
      /*STEP 6: timer is js function */
      setCurrent((prev) => (prev + 1) % testimonials.length); /*STEP 7: this line of code  set current index 0 then + 1 so 0+1=1 , then 1+1=2 after every 5 seconds */
    }, 5000);
    /*setCurrent(current + 1); its not good as somtimes currentvalue and current + 1 values becomes same and miss some items in the array which can cause issues or bugs  */
    /* "If I remove % testimonials.length, it will collect index of all items in the array... when it reaches 6 there is no item, then it becomes 7 and gives errors."

The main idea is correct, but it's not "collecting indexes." It's incrementing the current index.

A better interview answer would be:

"current stores the index of the currently displayed testimonial. Every 5 seconds, I increase the index by 1. Without using the modulo (%) operator, the index would eventually become larger than the last valid index of the array. For example, if there are 6 testimonials, the valid indexes are 0 to 5. After reaching index 5, it would become 6, then 7, and so on. Since testimonials[6] doesn't exist, it returns undefined, and trying to access properties like activeTestimonial.quote would cause a runtime error."*/
    return () => clearInterval(timer); /*STEP 8:This is cleanup function, React runs the cleanup function before the component unmounts or before the effect runs again. */
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;
  /*manual button functions forward */
  /*current = 0
prev click:
0 - 1 + 6 = 5
5 % 6 = 5 */
  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  /*manual button functions previous */
  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[current];

  return (
    <section id="experience" className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white md:px-20">
      <video className="absolute inset-0 h-full w-full object-cover" src="/videos/aurora-hero.mp4" autoPlay muted loop playsInline />

      <div className="absolute inset-0 bg-[#050816]/55" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Guest Stories</p>

        <h2 className="aurora-text mt-4 text-center font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white">Moments They Remember</h2>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={prev} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md transition hover:border-[#D4AF37]">
            <ChevronLeft size={20} />
          </button>

          <button onClick={next} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md transition hover:border-[#D4AF37]">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            /*Every testimonial has a unique ID key so it knows one card animates out and the next card animates in*/
            <motion.article key={activeTestimonial.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-white/10 bg-[#08101f]/70 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <div className="flex gap-1 text-[#D4AF37]">
                {[...Array(activeTestimonial.rating)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="mt-4 text-5xl text-[#D4AF37]">“</p>

              <p className="mt-6 text-xl leading-9 text-white/90">{activeTestimonial.quote}</p>

              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7FFFD4]/20 bg-[#7FFFD4]/10">
                  <UserRound size={24} className="text-[#7FFFD4]" />
                </div>

                <div>
                  <p className="font-semibold text-lg text-white">{activeTestimonial.name}</p>

                  <p className="text-white/60">{activeTestimonial.location}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
