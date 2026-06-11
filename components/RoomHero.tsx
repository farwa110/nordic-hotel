import Button from "./Button";
import type { Room } from "@/data/rooms";
import { Bed, Eye, Users } from "lucide-react";

export default function RoomHero({ room }: { room: Room }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img src={room.image} alt={room.title} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#050816]/50 to-black/40" />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 md:px-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Rooms & Suites</p>

          <h1 className="aurora-text font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white">{room.title}</h1>

          <p className="mt-6 max-w-2xl text-lg text-white/75">{room.longDescription}</p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">From {room.price} / Night</p>

          <div className="mt-8 flex flex-wrap gap-6 text-white/80">
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

          <div className="mt-10">
            {/* <Button href={`/booking?room=${room.slug}`} variant="primary"> */}
            <Button href="#room-collection" variant="primary">
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Button from "./Button";
// import type { Room } from "@/data/rooms";
// import { Bed, Eye, Users } from "lucide-react";

// export default function RoomHero({ room }: { room: Room }) {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <img src={room.image} alt={room.title} className="absolute inset-0 h-full w-full object-cover" />

//       <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#050816]/50 to-black/40" />

//       <div className="relative z-10 flex min-h-screen items-end pb-20">
//         <div className="mx-auto w-full max-w-7xl px-6 md:px-20">
//           <div className="max-w-3xl">
//             <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Rooms & Suites</p>

//             <h1 className="font-(--font-playfair) text-6xl md:text-8xl">{room.title}</h1>

//             <p className="mt-6 max-w-2xl text-lg text-white/75">{room.longDescription}</p>

//             <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">From {room.price} / Night</p>

//             <div className="mt-8 flex flex-wrap gap-6 text-white/80">
//               <span className="flex items-center gap-2">
//                 <Users size={18} className="text-[#D4AF37]" />
//                 {room.guests}
//               </span>

//               <span className="flex items-center gap-2">
//                 <Bed size={18} className="text-[#D4AF37]" />
//                 {room.bed}
//               </span>

//               <span className="flex items-center gap-2">
//                 <Eye size={18} className="text-[#D4AF37]" />
//                 {room.view}
//               </span>
//             </div>

//             <div className="mt-10">
//               <Button href={`/booking?room=${room.slug}`} variant="primary">
//                 Book This Room
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
