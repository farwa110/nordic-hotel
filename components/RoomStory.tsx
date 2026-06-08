import type { Room } from "@/data/rooms.ts";

export default function RoomStory({ room }: { room: Room }) {
  return (
    <section className="bg-[#050816] px-6 py-24 text-white md:px-20 mt-8">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">About This Retreat</p>

          <h2 className="font-(--font-playfair) text-4xl leading-tight md:text-6xl">{room.storyTitle}</h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-white/70">{room.storyText}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-sm text-white/50">Size</p>
              <p className="mt-2 text-xl font-semibold">{room.size}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-sm text-white/50">Guests</p>
              <p className="mt-2 text-xl font-semibold">{room.guests}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-sm text-white/50">View</p>
              <p className="mt-2 text-xl font-semibold">{room.view}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {room.highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
