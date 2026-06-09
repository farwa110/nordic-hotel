import Link from "next/link";
import { ArrowRight, BedDouble, Eye, UsersRound } from "lucide-react";
import RoomImageSlider from "./RoomImageSlider";

type Room = {
  title: string;
  description: string;
  price: string;
  images: string[];
};

type MoreRoomsProps = {
  rooms: Room[];
  selectedRoom?: Room;
};

export default function MoreRooms({ rooms, selectedRoom }: MoreRoomsProps) {
  const otherRooms = rooms.filter((room) => room.title !== selectedRoom?.title);

  return (
    <section className="mt-20">
      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Explore More Retreats</p>

      <h2 className="mt-3 font-(--font-playfair) text-4xl text-white">More rooms you may like</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {otherRooms.map((room) => (
          <article key={room.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
            <RoomImageSlider images={room.images} title={room.title} />

            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">From {room.price} / Night</p>

              <h3 className="mt-4 font-(--font-playfair) text-3xl text-white">{room.title}</h3>

              <p className="mt-3 text-white/60">{room.description}</p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/60">
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <UsersRound size={15} className="text-[#D4AF37]" />2 Guests
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <BedDouble size={15} className="text-[#D4AF37]" />
                  King Bed
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <Eye size={15} className="text-[#D4AF37]" />
                  Scenic View
                </span>
              </div>

              <div className="mt-8">
                <Link href={`/booking?room=${encodeURIComponent(room.title)}`} className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:gap-3 hover:bg-[#e4bf45]">
                  Book
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
