// import { notFound } from "next/navigation";
// import { getRooms } from "@/data/rooms";
// import type { Room } from "@/types/room";
// import RoomHero from "@/components/RoomHero";
// import RoomStory from "@/components/RoomStory";
// import RoomCollection from "@/components/RoomCollection";

// export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;

//   const rooms = await getRooms();
//   const room = rooms.find((room) => room.slug === slug);

//   if (!room) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-[#050816] text-white">
//       <RoomHero room={room} />
//       <RoomStory room={room} />
//       <RoomCollection room={room} />
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { getRoomBySlug } from "@/data/rooms";
import RoomHero from "@/components/RoomHero";
import RoomStory from "@/components/RoomStory";
import RoomCollection from "@/components/RoomCollection";

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const room = await getRoomBySlug(slug);

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
