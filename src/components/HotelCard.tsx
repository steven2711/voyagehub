import Link from "next/link";
import Image from "next/image";
import { Hotel } from "@/types";
import StarRating from "./StarRating";
import { formatCurrency } from "@/lib/utils";

export default function HotelCard({
  hotel,
  checkin,
  checkout,
  guests,
}: {
  hotel: Hotel;
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
    <Link
      href={`/hotels/${hotel.id}${query}`}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    >
      <div className="relative h-48 bg-gray-200">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-lg leading-tight">{hotel.name}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-sm font-medium text-gray-900">
              {hotel.rating}
            </span>
            <span className="text-xs text-gray-500">
              ({hotel.reviewCount.toLocaleString()})
            </span>
          </div>
        </div>
        <StarRating stars={hotel.stars} />
        <p className="text-sm text-gray-500 mt-1">{hotel.neighborhood}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {hotel.description}
        </p>
        <div className="mt-auto pt-4">
          <span className="text-lg font-bold text-blue-600">
            {formatCurrency(hotel.priceFrom)}
          </span>
          <span className="text-sm text-gray-500"> / night</span>
        </div>
      </div>
    </Link>
  );
}
