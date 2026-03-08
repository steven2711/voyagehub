"use client";

import { useState, use } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getRoomById, getHotelById } from "@/lib/search";
import { calculateTotalPrice, generateConfirmationCode } from "@/lib/booking";
import { formatCurrency, getNumberOfNights, formatDate } from "@/lib/utils";
import { BookingDetails } from "@/types";
import BookingForm from "@/components/BookingForm";
import BookingConfirmation from "@/components/BookingConfirmation";

function BookingContent({ roomId }: { roomId: string }) {
  const searchParams = useSearchParams();
  const checkin = searchParams.get("checkin") || "";
  const checkout = searchParams.get("checkout") || "";
  const guests = searchParams.get("guests") || "2";

  const [booking, setBooking] = useState<BookingDetails | null>(null);

  const room = getRoomById(roomId);
  const hotel = room ? getHotelById(room.hotelId) : undefined;

  if (!room || !hotel) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Room Not Found</h1>
        <p className="text-gray-500">
          The room you are looking for does not exist.
        </p>
      </div>
    );
  }

  const nights =
    checkin && checkout ? getNumberOfNights(checkin, checkout) : 1;
  const totalPrice =
    checkin && checkout
      ? calculateTotalPrice(room.pricePerNight, checkin, checkout)
      : room.pricePerNight;

  if (booking) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BookingConfirmation booking={booking} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Complete Your Booking</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Guest Details</h2>
            <BookingForm
              onSubmit={(data) => {
                const confirmationCode = generateConfirmationCode();
                setBooking({
                  roomId: room.id,
                  hotelName: hotel.name,
                  roomName: room.name,
                  guestName: data.guestName,
                  guestEmail: data.guestEmail,
                  guestPhone: data.guestPhone,
                  checkin: checkin || new Date().toISOString().split("T")[0],
                  checkout:
                    checkout ||
                    new Date(Date.now() + 86400000)
                      .toISOString()
                      .split("T")[0],
                  guests: parseInt(guests),
                  totalPrice,
                  confirmationCode,
                });
              }}
            />
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
            <div className="space-y-3">
              <div>
                <p className="font-medium">{hotel.name}</p>
                <p className="text-sm text-gray-500">{room.name}</p>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Check-in</span>
                <span>{checkin ? formatDate(checkin) : "N/A"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Check-out</span>
                <span>{checkout ? formatDate(checkout) : "N/A"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Guests</span>
                <span>{guests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {formatCurrency(room.pricePerNight)} x {nights}{" "}
                  {nights === 1 ? "night" : "nights"}
                </span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-blue-600">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = use(params);

  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">
          Loading booking...
        </div>
      }
    >
      <BookingContent roomId={roomId} />
    </Suspense>
  );
}
