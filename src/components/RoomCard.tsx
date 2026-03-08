import Link from "next/link";
import Image from "next/image";
import { Room } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function RoomCard({
  room,
  checkin,
  checkout,
  guests,
}: {
  room: Room;
  checkin?: string;
  checkout?: string;
  guests?: string;
}) {
  const params = new URLSearchParams();
  if (checkin) params.set("checkin", checkin);
  if (checkout) params.set("checkout", checkout);
  if (guests) params.set("guests", guests);
  const query = params.toString() ? `?${params.toString()}` : "";

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-48 h-40 sm:h-auto bg-gray-200 shrink-0">
        <Image
          src={room.imageUrl}
          alt={room.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{room.name}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {room.bedType} &middot; Up to {room.maxGuests} guests
        </p>
        <p className="text-sm text-gray-600 mt-2">{room.description}</p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-blue-600">
              {formatCurrency(room.pricePerNight)}
            </span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
          <Link
            href={`/book/${room.id}${query}`}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
