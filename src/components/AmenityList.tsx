import { getAmenityById } from "@/lib/search";

export default function AmenityList({ amenityIds }: { amenityIds: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {amenityIds.map((id) => {
        const amenity = getAmenityById(id);
        if (!amenity) return null;
        return (
          <span
            key={id}
            className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
          >
            <span>{amenity.icon}</span>
            <span>{amenity.name}</span>
          </span>
        );
      })}
    </div>
  );
}
