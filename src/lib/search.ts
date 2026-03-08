import { hotels } from "@/data/hotels";
import { rooms } from "@/data/rooms";
import { amenities } from "@/data/amenities";
import { Hotel, Room, Amenity, SearchFilters } from "@/types";

export function searchHotels(filters?: Partial<SearchFilters>): Hotel[] {
  let results = [...hotels];

  if (filters) {
    if (filters.minPrice !== undefined) {
      results = results.filter((h) => h.priceFrom >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      results = results.filter((h) => h.priceFrom <= filters.maxPrice!);
    }
    if (filters.minStars !== undefined && filters.minStars > 0) {
      results = results.filter((h) => h.stars >= filters.minStars!);
    }
    if (filters.amenities && filters.amenities.length > 0) {
      results = results.filter((h) =>
        filters.amenities!.every((a) => h.amenityIds.includes(a))
      );
    }
  }

  return results;
}

export function getHotelById(id: string): Hotel | undefined {
  return hotels.find((h) => h.id === id);
}

export function getRoomsByHotelId(hotelId: string): Room[] {
  return rooms.filter((r) => r.hotelId === hotelId);
}

export function getRoomById(roomId: string): Room | undefined {
  return rooms.find((r) => r.id === roomId);
}

export function getAmenityById(id: string): Amenity | undefined {
  return amenities.find((a) => a.id === id);
}

export function getAllAmenities(): Amenity[] {
  return amenities;
}
