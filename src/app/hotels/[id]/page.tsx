import { notFound } from "next/navigation";
import { getHotelById, getRoomsByHotelId } from "@/lib/search";
import StarRating from "@/components/StarRating";
import AmenityList from "@/components/AmenityList";
import PhotoGallery from "@/components/PhotoGallery";
import RoomCard from "@/components/RoomCard";

export default async function HotelDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ checkin?: string; checkout?: string; guests?: string }>;
}) {
  const { id } = await params;
  const { checkin, checkout, guests } = await searchParams;
  const hotel = getHotelById(id);

  if (!hotel) {
    notFound();
  }

  const rooms = getRoomsByHotelId(hotel.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PhotoGallery images={hotel.images} altText={hotel.name} />

      <div className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <StarRating stars={hotel.stars} />
              <span className="text-sm text-gray-600">
                {hotel.rating} ({hotel.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            <p className="text-gray-500 mt-1">
              {hotel.neighborhood}, {hotel.city}, {hotel.state}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          {hotel.description}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Amenities</h2>
          <AmenityList amenityIds={hotel.amenityIds} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Available Rooms ({rooms.length})
        </h2>
        <div className="space-y-4">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              checkin={checkin}
              checkout={checkout}
              guests={guests}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
