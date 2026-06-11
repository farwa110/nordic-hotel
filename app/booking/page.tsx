import { rooms } from "@/data/rooms";
import BookingUser from "@/components/BookingUser";
import MoreRoomsCaraousel from "@/components/MoreRoomsCarousel";

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams;

  const allRooms = rooms.flatMap((item) => item.collection);
  const selectedRoom = allRooms.find((item) => item.title === room);

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white md:px-20 mt-20">
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Booking</p>

      <h1 className="font-(--font-playfair) text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white">Reserve Your Stay</h1>

      <p className="mt-4 max-w-2xl text-white/60">Complete your reservation request. No online payment is required — you can pay on arrival.</p>

      <BookingUser selectedRoom={selectedRoom} />
      <MoreRoomsCaraousel rooms={allRooms} selectedRoom={selectedRoom} />
    </main>
  );
}
