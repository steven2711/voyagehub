import SearchForm from "@/components/SearchForm";

export default function HomePage() {
  return (
    <div>
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Find Your Perfect Stay in Orlando
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Discover amazing hotels across Orlando&apos;s best neighborhoods.
              From luxury resorts to budget-friendly stays.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <SearchForm />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Popular Neighborhoods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "International Drive",
                desc: "Heart of Orlando's tourist corridor",
                count: 3,
                image:
                  "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=600&q=80",
              },
              {
                name: "Lake Buena Vista",
                desc: "Near Walt Disney World",
                count: 2,
                image:
                  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=80",
              },
              {
                name: "Downtown Orlando",
                desc: "Arts, dining, and nightlife",
                count: 1,
                image:
                  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
              },
              {
                name: "Universal Area",
                desc: "Steps from Universal Orlando",
                count: 2,
                image:
                  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
              },
              {
                name: "Kissimmee",
                desc: "Great value, close to parks",
                count: 2,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
              },
            ].map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{area.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{area.desc}</p>
                  <p className="text-blue-600 text-sm font-medium">
                    {area.count} {area.count === 1 ? "hotel" : "hotels"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
