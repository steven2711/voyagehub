"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm({
  defaultCheckin,
  defaultCheckout,
  defaultGuests,
}: {
  defaultCheckin?: string;
  defaultCheckout?: string;
  defaultGuests?: string;
}) {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkin, setCheckin] = useState(defaultCheckin || today);
  const [checkout, setCheckout] = useState(defaultCheckout || tomorrow);
  const [guests, setGuests] = useState(defaultGuests || "2");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ checkin, checkout, guests });
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <label
          htmlFor="destination"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Destination
        </label>
        <input
          id="destination"
          type="text"
          value="Orlando, FL"
          disabled
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
        />
      </div>
      <div className="flex-1">
        <label
          htmlFor="checkin"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Check-in
        </label>
        <input
          id="checkin"
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
          min={today}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex-1">
        <label
          htmlFor="checkout"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Check-out
        </label>
        <input
          id="checkout"
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          min={checkin || today}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="w-24">
        <label
          htmlFor="guests"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Guests
        </label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
