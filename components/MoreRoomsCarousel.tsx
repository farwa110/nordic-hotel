"use client";

// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Room = {
  title: string;
  description: string;
  price: string;
  images: string[];
};

type MoreRoomsCarouselProps = {
  rooms: Room[];
  selectedRoom?: Room;
};

export default function MoreRoomsCarousel({ rooms, selectedRoom }: MoreRoomsCarouselProps) {
  const otherRooms = rooms.filter((room) => room.title !== selectedRoom?.title);
  const [current, setCurrent] = useState(0);
  // const next = useCallback(() => {
  //   setCurrent((prev) => (prev + 1) % otherRooms.length);
  // }, [otherRooms.length]);

  const visibleRooms = [...otherRooms, ...otherRooms].slice(current, current + 3);

  function next() {
    setCurrent((prev) => (prev + 1) % otherRooms.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + otherRooms.length) % otherRooms.length);
  }

  // useEffect(() => {
  //   const timer = setInterval(next, 4500);
  //   return () => clearInterval(timer);
  // }, [otherRooms.length]);

  // if (otherRooms.length === 0) return null;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % otherRooms.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [otherRooms.length]);

  return (
    <section className="mt-20">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm sm:tracking-[0.3em]">Explore More Retreats</p>

          <h2 className="mt-3 max-w-xs font-(--font-playfair) text-3xl leading-tight text-white sm:max-w-none sm:text-4xl">More rooms you may like</h2>
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
            <ChevronLeft size={20} />
          </button>

          <button type="button" onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleRooms.map((room, index) => (
          <article key={`${room.title}-${index}`} className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
            <Image src={room.images[0]} alt={room.title} width={800} height={500} className="h-56 w-full object-cover" />

            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">From {room.price} / Night</p>

              <h3 className="mt-3 font-(--font-playfair) text-2xl text-white">{room.title}</h3>

              <p className="mt-2 line-clamp-2 text-sm text-white/60">{room.description}</p>

              <Link href={`/booking?room=${encodeURIComponent(room.title)}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black transition hover:gap-3 hover:bg-[#e4bf45]">
                Book
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
