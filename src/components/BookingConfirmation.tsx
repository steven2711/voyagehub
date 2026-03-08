"use client";

import Link from "next/link";
import { BookingDetails } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function BookingConfirmation({
  booking,
}: {
  booking: BookingDetails;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-lg mx-auto text-center">
      <div className="text-green-500 text-5xl mb-4">&#10003;</div>
      <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
      <p className="text-gray-500 mb-6">
        Your confirmation code is{" "}
        <span className="font-mono font-bold text-gray-900">
          {booking.confirmationCode}
        </span>
      </p>

      <div className="text-left space-y-3 bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-500">Hotel</span>
          <span className="font-medium">{booking.hotelName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Room</span>
          <span className="font-medium">{booking.roomName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Guest</span>
          <span className="font-medium">{booking.guestName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Check-in</span>
          <span className="font-medium">{formatDate(booking.checkin)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Check-out</span>
          <span className="font-medium">{formatDate(booking.checkout)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Guests</span>
          <span className="font-medium">{booking.guests}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between text-lg">
          <span className="font-medium">Total</span>
          <span className="font-bold text-blue-600">
            {formatCurrency(booking.totalPrice)}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        A confirmation email has been sent to {booking.guestEmail}
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
