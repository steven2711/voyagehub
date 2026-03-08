"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { searchHotels } from "@/lib/search";
import { SearchFilters } from "@/types";
import HotelCard from "@/components/HotelCard";
import FilterSidebar from "@/components/FilterSidebar";
import SearchForm from "@/components/SearchForm";

function SearchContent() {
  const searchParams = useSearchParams();
  const checkin = searchParams.get("checkin") || undefined;
  const checkout = searchParams.get("checkout") || undefined;
  const guests = searchParams.get("guests") || undefined;

  const [filters, setFilters] = useState<Partial<SearchFilters>>({});

  const hotels = searchHotels(filters);

  const handleFilterChange = useCallback(
    (newFilters: Partial<SearchFilters>) => {
      setFilters(newFilters);
    },
    []
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Hotels in Orlando, FL</h1>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <SearchForm
            defaultCheckin={checkin}
            defaultCheckout={checkout}
            defaultGuests={guests}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-72 shrink-0">
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">
            {hotels.length} {hotels.length === 1 ? "hotel" : "hotels"} found
          </p>
          {hotels.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">
                No hotels match your filters. Try adjusting your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  checkin={checkin}
                  checkout={checkout}
                  guests={guests}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">
          Loading search results...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
