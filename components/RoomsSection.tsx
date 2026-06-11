"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Button from "./Button";
import { ArrowRight, Bed, Eye, Users } from "lucide-react";
import { rooms } from "@/data/rooms";

//  Index:   0        1        2        3
//          ↓        ↓        ↓        ↓
// rooms = [Aurora, Nordic, Premium, Panorama]
// room[0] = Aurora Suite
// room[1] = Nordic Cabin
// room[2] = Premium Lodge
// room[3] = Panorama Retreat
// function FeaturedRoomCard({
//   room,
// }: {
//   room: (typeof rooms)[0];
// })

// (typeof rooms)[0] means:

// "The type of a single object inside the rooms array."text-5xl md:text-7xl

export default function RoomsSection() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);

  return (
    <section id="rooms" className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white md:px-20">
      <div className="absolute inset-0 opacity-60">
        <video className="absolute inset-0 h-full w-full object-cover" src="/videos/aurora-hero.mp4" autoPlay muted loop playsInline />
      </div>

      <div className="absolute inset-0 bg-[#050816]/50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">Rooms & Suites</p>
          <h2 className="aurora-text font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white">Choose Your Retreat</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">Find the perfect sanctuary for your Aurora experience.</p>
        </motion.div>

        <div className="grid overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl lg:grid-cols-[1.2fr_1fr]">
          <FeaturedRoomCard room={activeRoom} />
          <RoomList activeRoom={activeRoom} setActiveRoom={setActiveRoom} />
        </div>
      </div>
    </section>
  );
}

function FeaturedRoomCard({ room }: { room: (typeof rooms)[0] }) {
  return (
    <motion.div key={room.title} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="relative min-h-130 overflow-hidden border-white/10 lg:min-h-150 lg:border-r">
      <img src={room.featuredImage} alt={room.title} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#050816]/30 to-transparent" />

      {/* <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12"> */}
      <div className="absolute bottom-0 left-0 z-10 p-6 md:p-12">
        {/* <h3 className="font-(--font-playfair) text-4xl md:text-5xl">{room.title}</h3> */}
        <h3 className="aurora-text font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] ">{room.title}</h3>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">From {room.price} / Night</p>

        <div className="mt-6 flex flex-wrap gap-6 text-white/80">
          <span className="flex items-center gap-2">
            <Users size={18} className="text-[#D4AF37]" />
            {room.guests}
          </span>

          <span className="flex items-center gap-2">
            <Bed size={18} className="text-[#D4AF37]" />
            {room.bed}
          </span>

          <span className="flex items-center gap-2">
            <Eye size={18} className="text-[#D4AF37]" />
            {room.view}
          </span>
        </div>

        <div className="mt-8">
          {/* <Button href="/rooms/aurora-suite" variant="primary">
            View Details
          </Button> */}
          <Button href={`/rooms/${room.slug}`} variant="primary">
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function RoomList({ activeRoom, setActiveRoom }: { activeRoom: (typeof rooms)[0]; setActiveRoom: (room: (typeof rooms)[0]) => void }) {
  return (
    <div className="space-y-4 p-6 md:p-8">
      {rooms.map((room, index) => {
        const isActive = activeRoom.title === room.title;

        return (
          <motion.button key={room.title} type="button" onClick={() => setActiveRoom(room)} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} className={`group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 rounded-3xl border p-5 text-left transition-all duration-300 ${isActive ? "border-[#D4AF37] bg-white/8" : "border-white/10 bg-white/4 hover:border-[#D4AF37]/70"}`}>
            <span className="text-xl font-semibold text-[#D4AF37]">{room.number}</span>

            <div>
              <h3 className="font-(--font-playfair) text-2xl md:text-3xl">{room.title}</h3>
              <p className="mt-2 text-sm text-white/60">{room.description}</p>
            </div>

            <div className="hidden h-24 w-36 overflow-hidden rounded-2xl md:block">
              <img src={room.image} alt={room.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]">
              <ArrowRight size={18} />
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
