import { Room } from "@/types";

export const rooms: Room[] = [
  // Grand Orlando Resort & Spa
  {
    id: "grand-standard-king",
    hotelId: "grand-orlando-resort",
    name: "Deluxe King Room",
    description:
      "Spacious room with king bed, marble bathroom, and resort view. Includes complimentary minibar and premium linens.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 350,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "grand-suite",
    hotelId: "grand-orlando-resort",
    name: "Presidential Suite",
    description:
      "Our finest suite featuring separate living room, dining area, and panoramic views. Butler service included.",
    bedType: "King",
    maxGuests: 4,
    pricePerNight: 500,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "grand-double-queen",
    hotelId: "grand-orlando-resort",
    name: "Family Room - Double Queen",
    description:
      "Perfect for families with two queen beds, a sitting area, and a mini-fridge. Connecting rooms available.",
    bedType: "Double Queen",
    maxGuests: 4,
    pricePerNight: 380,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Lakeside Inn & Suites
  {
    id: "lakeside-queen",
    hotelId: "lakeside-inn",
    name: "Lake View Queen",
    description:
      "Cozy room with queen bed and beautiful lake views. Wake up to stunning sunrises over the water.",
    bedType: "Queen",
    maxGuests: 2,
    pricePerNight: 180,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "lakeside-suite",
    hotelId: "lakeside-inn",
    name: "Family Suite",
    description:
      "Spacious suite with separate bedroom and living area. Includes kitchenette and lake view balcony.",
    bedType: "King + Sofa Bed",
    maxGuests: 4,
    pricePerNight: 250,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Downtown Boutique
  {
    id: "downtown-studio",
    hotelId: "downtown-boutique",
    name: "Urban Studio",
    description:
      "Chic studio room with local artwork, rain shower, and city views. Curated minibar with local craft beverages.",
    bedType: "Queen",
    maxGuests: 2,
    pricePerNight: 220,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "downtown-loft",
    hotelId: "downtown-boutique",
    name: "Artist Loft Suite",
    description:
      "Two-story loft with exposed brick, king bed upstairs, and living space downstairs. Features a record player and vinyl collection.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 320,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "downtown-penthouse",
    hotelId: "downtown-boutique",
    name: "Skyline Penthouse",
    description:
      "Top-floor penthouse with wraparound terrace and 360-degree city views. Private hot tub and premium amenities.",
    bedType: "King",
    maxGuests: 3,
    pricePerNight: 450,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Sunshine Suites
  {
    id: "sunshine-one-bed",
    hotelId: "sunshine-suites",
    name: "One Bedroom Suite",
    description:
      "Full suite with separate bedroom, living room, and equipped kitchen. Washer/dryer in unit.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 120,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "sunshine-two-bed",
    hotelId: "sunshine-suites",
    name: "Two Bedroom Suite",
    description:
      "Spacious two-bedroom suite perfect for families. Full kitchen, two bathrooms, and separate living area.",
    bedType: "King + Double Twin",
    maxGuests: 6,
    pricePerNight: 180,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Palm Paradise
  {
    id: "palm-garden",
    hotelId: "palm-paradise",
    name: "Garden View Room",
    description:
      "Tropical-themed room overlooking lush gardens. Step out onto your private patio and enjoy the Orlando sunshine.",
    bedType: "Queen",
    maxGuests: 2,
    pricePerNight: 200,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "palm-pool",
    hotelId: "palm-paradise",
    name: "Pool View King",
    description:
      "Premium room with direct pool views and easy pool access. Includes poolside cabana reservation.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 250,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "palm-family",
    hotelId: "palm-paradise",
    name: "Tropical Family Suite",
    description:
      "Fun family suite with bunk beds for kids and a king bed for parents. Themed decor and game console included.",
    bedType: "King + Bunk Beds",
    maxGuests: 4,
    pricePerNight: 280,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Budget Stay Express
  {
    id: "budget-standard",
    hotelId: "budget-stay",
    name: "Standard Double",
    description:
      "Clean and comfortable room with two double beds. Everything you need at a great price.",
    bedType: "Double Double",
    maxGuests: 4,
    pricePerNight: 80,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "budget-king",
    hotelId: "budget-stay",
    name: "Standard King",
    description:
      "Comfortable room with king bed and work desk. Ideal for solo travelers or couples.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 85,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Royal Palms Resort
  {
    id: "royal-deluxe",
    hotelId: "royal-palms",
    name: "Deluxe Resort Room",
    description:
      "Elegant room with resort views, marble bathroom, and premium bedding. Club level access available.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 420,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "royal-executive",
    hotelId: "royal-palms",
    name: "Executive Suite",
    description:
      "Luxurious suite with separate office, living room, and bedroom. Includes executive lounge access and breakfast.",
    bedType: "King",
    maxGuests: 3,
    pricePerNight: 500,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "royal-villa",
    hotelId: "royal-palms",
    name: "Garden Villa",
    description:
      "Private villa with two bedrooms, plunge pool, and garden terrace. The ultimate luxury escape.",
    bedType: "2 King",
    maxGuests: 4,
    pricePerNight: 750,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Magic Mile Inn
  {
    id: "magic-standard",
    hotelId: "magic-mile-inn",
    name: "Standard Room",
    description:
      "Comfortable room with two queen beds. Includes free breakfast and kids splash pad access.",
    bedType: "Double Queen",
    maxGuests: 4,
    pricePerNight: 95,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "magic-family",
    hotelId: "magic-mile-inn",
    name: "Family Fun Suite",
    description:
      "Suite with master bedroom and kids' area with bunk beds and game console. Mini-fridge and microwave included.",
    bedType: "King + Bunk Beds",
    maxGuests: 5,
    pricePerNight: 140,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Universal Gateway
  {
    id: "gateway-standard",
    hotelId: "universal-gateway",
    name: "Park View Room",
    description:
      "Modern room with views of Universal Orlando. Includes early park admission and shuttle service.",
    bedType: "Queen",
    maxGuests: 2,
    pricePerNight: 260,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "gateway-premium",
    hotelId: "universal-gateway",
    name: "Premium King Suite",
    description:
      "Upgraded suite with living area, soaking tub, and premium park views. Priority restaurant reservations included.",
    bedType: "King",
    maxGuests: 3,
    pricePerNight: 350,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "gateway-family",
    hotelId: "universal-gateway",
    name: "Theme Park Family Room",
    description:
      "Themed room designed for families with two queen beds, themed decor, and complimentary park ticket package options.",
    bedType: "Double Queen",
    maxGuests: 4,
    pricePerNight: 290,
    imageUrl: "/images/placeholder-hotel.svg",
  },

  // Kissimmee Comfort Lodge
  {
    id: "kissimmee-double",
    hotelId: "kissimmee-comfort",
    name: "Comfort Double Room",
    description:
      "Recently renovated room with two double beds, mini-fridge, and microwave. Free breakfast included.",
    bedType: "Double Double",
    maxGuests: 4,
    pricePerNight: 90,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "kissimmee-king",
    hotelId: "kissimmee-comfort",
    name: "Comfort King Room",
    description:
      "Renovated room with king bed, work desk, and pool view. Perfect for couples.",
    bedType: "King",
    maxGuests: 2,
    pricePerNight: 95,
    imageUrl: "/images/placeholder-hotel.svg",
  },
  {
    id: "kissimmee-suite",
    hotelId: "kissimmee-comfort",
    name: "Junior Suite",
    description:
      "Spacious suite with king bed, sitting area, and kitchenette. Includes free breakfast and parking.",
    bedType: "King + Sofa Bed",
    maxGuests: 3,
    pricePerNight: 130,
    imageUrl: "/images/placeholder-hotel.svg",
  },
];
