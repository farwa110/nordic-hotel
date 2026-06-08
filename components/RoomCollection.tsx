import Button from "./Button";
import type { Room } from "@/data/rooms.ts";
import RoomImageSlider from "./RoomImageSlider";

export default function RoomCollection({ room }: { room: Room }) {
  return (
    <section id="room-collection" className="bg-[#050816]  text-white mt-8">
      <div className="px-6 py-24 md:px-20">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Available Retreats</p>

            <h2 className="font-(--font-playfair) text-4xl md:text-6xl">Choose Your Stay</h2>
            <p className="mt-4 text-white/60">Explore rooms within the {room.title} collection and choose the stay that matches your escape.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {room.collection.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3">
              <div className="h-72 overflow-hidden">
                <RoomImageSlider images={item.images} title={item.title} />
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">From {item.price} / Night</p>

                <h3 className="mt-3 font-(--font-playfair) text-3xl">{item.title}</h3>

                <p className="mt-3 text-sm text-white/60">{item.description}</p>

                <div className="mt-6 flex gap-3">
                  <Button href={`/booking?room=${item.title}`} variant="primary">
                    Book
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
