import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms";
import RoomHero from "@/components/RoomHero";
import RoomStory from "@/components/RoomStory";
import RoomCollection from "@/components/RoomCollection";

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <RoomHero room={room} />
      <RoomStory room={room} />
      <RoomCollection room={room} />
    </main>
  );
}
