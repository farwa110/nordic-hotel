import { rooms } from "@/data/rooms";
import MoreRooms from "@/components/MoreRooms";

export default async function RoomGridPage({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams;

  const allRooms = rooms.flatMap((item) => item.collection);
  const selectedRoom = allRooms.find((item) => item.title === room);
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white md:px-20">
      <MoreRooms rooms={allRooms} selectedRoom={selectedRoom} />
    </main>
  );
}
