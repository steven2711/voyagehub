"use client";

import { useState } from "react";
import { validateBookingForm, BookingFormErrors } from "@/lib/booking";

export default function BookingForm({
  onSubmit,
}: {
  onSubmit: (data: {
    guestName: string;
    guestEmail: string;
    guestPhone: string;
  }) => void;
}) {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [errors, setErrors] = useState<BookingFormErrors>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateBookingForm({
      guestName,
      guestEmail,
      guestPhone,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onSubmit({ guestName, guestEmail, guestPhone });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="guestName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          id="guestName"
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="John Doe"
        />
        {errors.guestName && (
          <p className="text-red-500 text-sm mt-1">{errors.guestName}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="guestEmail"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="guestEmail"
          type="email"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="john@example.com"
        />
        {errors.guestEmail && (
          <p className="text-red-500 text-sm mt-1">{errors.guestEmail}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="guestPhone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          id="guestPhone"
          type="tel"
          value={guestPhone}
          onChange={(e) => setGuestPhone(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="(555) 123-4567"
        />
        {errors.guestPhone && (
          <p className="text-red-500 text-sm mt-1">{errors.guestPhone}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Confirm Booking
      </button>
    </form>
  );
}
