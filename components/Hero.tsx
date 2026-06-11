// "use client";

// import { motion } from "motion/react";
// import Navbar from "./Navbar";
// import Button from "./Button";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <Navbar />

//       <video className="absolute inset-0 h-full w-full object-cover" src="/videos/aurora-hero.mp4" autoPlay muted loop playsInline />

//       <div className="absolute inset-0 bg-black/50" />
//       <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-[#050816]" />

//       <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">
//         <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
//           <p className="mb-4 tracking-[0.4em] text-sky-300 uppercase">Nordic Luxury Retreat</p>

//           <h2 className="mb-6 font-(--font-playfair) text-6xl text-white md:text-8xl">
//             Escape Into
//             <br />
//             Nordic Luxury
//           </h2>

//           <p className="mb-8 max-w-xl text-lg text-white/80">Experience the magic of the Northern Lights from your private retreat surrounded by nature, comfort and elegance.</p>

//           <div className="flex flex-col gap-4 sm:flex-row">
//             <Button href="/room-grid" variant="primary">
//               Book Your Stay
//             </Button>

//             <Button href="/#rooms" variant="tertiary">
//               Explore Retreats
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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

      <div className="relative z-10 flex min-h-screen items-center px-6 pt-28 pb-12 md:px-20">
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
          <p className="mb-4 text-sm tracking-[0.32em] text-sky-300 uppercase sm:text-base md:tracking-[0.4em]">Nordic Luxury Retreat</p>

          {/* <h2 className="mb-6 font-(--font-playfair) text-[36px] md:text-[48px] lg:text-[52px] leading-[0.95] text-white"> */}
          <h2 className="aurora-text mb-6 font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[0.95] text-white">
            Escape Into
            <br />
            Nordic Luxury
          </h2>

          <p className="mb-8 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Experience the magic of the Northern Lights from your private retreat surrounded by nature, comfort and elegance.</p>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button href="/room-grid" variant="primary">
              Book Your Stay
            </Button>

            <div className="hidden sm:block">
              <Button href="/#rooms" variant="tertiary">
                Explore Retreats
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
