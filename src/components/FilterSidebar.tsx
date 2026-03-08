"use client";

import { useState, useCallback } from "react";
import { SearchFilters } from "@/types";
import { getAllAmenities } from "@/lib/search";

export default function FilterSidebar({
  onFilterChange,
}: {
  onFilterChange: (filters: Partial<SearchFilters>) => void;
}) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(800);
  const [minStars, setMinStars] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenities = getAllAmenities();

  const applyFilters = useCallback(
    (overrides?: Partial<{ minPrice: number; maxPrice: number; minStars: number; amenities: string[] }>) => {
      onFilterChange({
        minPrice: overrides?.minPrice ?? minPrice,
        maxPrice: overrides?.maxPrice ?? maxPrice,
        minStars: overrides?.minStars ?? minStars,
        amenities: overrides?.amenities ?? selectedAmenities,
      });
    },
    [minPrice, maxPrice, minStars, selectedAmenities, onFilterChange]
  );

  return (
    <aside className="bg-white rounded-lg border border-gray-200 p-5">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Price Range (per night)
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            max={maxPrice}
            value={minPrice}
            onChange={(e) => {
              const v = Number(e.target.value);
              setMinPrice(v);
              applyFilters({ minPrice: v });
            }}
            className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
            placeholder="Min"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            min={minPrice}
            value={maxPrice}
            onChange={(e) => {
              const v = Number(e.target.value);
              setMaxPrice(v);
              applyFilters({ maxPrice: v });
            }}
            className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
            placeholder="Max"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Minimum Stars
        </h3>
        <div className="flex gap-2">
          {[0, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => {
                setMinStars(s);
                applyFilters({ minStars: s });
              }}
              className={`px-3 py-1 rounded text-sm border ${
                minStars === s
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {s === 0 ? "Any" : `${s}+`}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <label
              key={amenity.id}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity.id)}
                onChange={(e) => {
                  const updated = e.target.checked
                    ? [...selectedAmenities, amenity.id]
                    : selectedAmenities.filter((a) => a !== amenity.id);
                  setSelectedAmenities(updated);
                  applyFilters({ amenities: updated });
                }}
                className="rounded border-gray-300"
              />
              <span>{amenity.icon}</span>
              <span className="text-gray-700">{amenity.name}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
