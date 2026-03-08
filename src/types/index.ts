export interface Hotel {
  id: string;
  name: string;
  description: string;
  neighborhood: string;
  city: string;
  state: string;
  stars: number;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  imageUrl: string;
  images: string[];
  amenityIds: string[];
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  description: string;
  bedType: string;
  maxGuests: number;
  pricePerNight: number;
  imageUrl: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface SearchParams {
  destination?: string;
  checkin?: string;
  checkout?: string;
  guests?: string;
}

export interface SearchFilters {
  minPrice: number;
  maxPrice: number;
  minStars: number;
  amenities: string[];
}

export interface BookingDetails {
  roomId: string;
  hotelName: string;
  roomName: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkin: string;
  checkout: string;
  guests: number;
  totalPrice: number;
  confirmationCode: string;
}
