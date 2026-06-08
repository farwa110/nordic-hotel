// import { rooms } from "@/data/rooms";
// import Button from "@/components/Button";

// export default async function BookingPage({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
//   const { room } = await searchParams;

//   const allRooms = rooms.flatMap((item) => item.collection);
//   const selectedRoom = allRooms.find((item) => item.title === room);

//   return (
//     <main className="min-h-screen bg-[#050816] px-6 py-24 text-white md:px-20">
//       <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Booking</p>

//       <h1 className="font-(--font-playfair) text-5xl md:text-7xl">Reserve Your Stay</h1>

//       <p className="mt-4 max-w-2xl text-white/60">Complete your reservation request. No online payment is required — you can pay on arrival.</p>

//       <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
//         {selectedRoom && (
//           <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
//             <img src={selectedRoom.images[0]} alt={selectedRoom.title} className="h-72 w-full rounded-2xl object-cover" />

//             <div className="mt-6">
//               <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Selected Retreat</p>

//               <h2 className="mt-3 font-(--font-playfair) text-4xl">{selectedRoom.title}</h2>

//               <p className="mt-3 text-white/60">{selectedRoom.description}</p>

//               <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">From {selectedRoom.price} / Night</p>

//               <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4">
//                 <p className="font-semibold text-[#D4AF37]">Pay on arrival</p>
//                 <p className="mt-2 text-sm text-white/60">Your booking request will be confirmed by email. Payment is completed when you arrive at the retreat.</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <form className="rounded-3xl border border-white/10 bg-white/3 p-6">
//           <h2 className="font-(--font-playfair) text-3xl">Guest Details</h2>

//           <div className="mt-6 grid gap-5 md:grid-cols-2">
//             <div>
//               <label className="text-sm text-white/60">Full Name</label>
//               <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
//             </div>

//             <div>
//               <label className="text-sm text-white/60">Email</label>
//               <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
//             </div>

//             <div>
//               <label className="text-sm text-white/60">Check-in</label>
//               <input type="date" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
//             </div>

//             <div>
//               <label className="text-sm text-white/60">Check-out</label>
//               <input type="date" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
//             </div>

//             <div>
//               <label className="text-sm text-white/60">Guests</label>
//               <select className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]">
//                 <option>1 Guest</option>
//                 <option>2 Guests</option>
//                 <option>3 Guests</option>
//                 <option>4 Guests</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm text-white/60">Phone</label>
//               <input type="tel" placeholder="+45 12 34 56 78" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
//             </div>
//           </div>

//           <div className="mt-5">
//             <label className="text-sm text-white/60">Special Request</label>
//             <textarea placeholder="Arrival time, extra notes, preferences..." rows={4} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none focus:border-[#D4AF37]" />
//           </div>

//           <div className="mt-8">
//             <Button href="#" variant="primary">
//               Send Booking Request
//             </Button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

import { rooms } from "@/data/rooms";
import BookingUser from "@/components/BookingUser";

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams;

  const allRooms = rooms.flatMap((item) => item.collection);
  const selectedRoom = allRooms.find((item) => item.title === room);

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white md:px-20">
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Booking</p>

      <h1 className="font-(--font-playfair) text-5xl md:text-7xl">Reserve Your Stay</h1>

      <p className="mt-4 max-w-2xl text-white/60">Complete your reservation request. No online payment is required — you can pay on arrival.</p>

      <BookingUser selectedRoom={selectedRoom} />
    </main>
  );
}
