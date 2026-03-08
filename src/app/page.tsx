import SearchForm from "@/components/SearchForm";

export default function HomePage() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Find Your Perfect Stay in Orlando
            </h1>
            <p className="text-xl text-blue-100 mb-8">
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
              },
              {
                name: "Lake Buena Vista",
                desc: "Near Walt Disney World",
                count: 2,
              },
              {
                name: "Downtown Orlando",
                desc: "Arts, dining, and nightlife",
                count: 1,
              },
              {
                name: "Universal Area",
                desc: "Steps from Universal Orlando",
                count: 2,
              },
              {
                name: "Kissimmee",
                desc: "Great value, close to parks",
                count: 2,
              },
            ].map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-1">{area.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{area.desc}</p>
                <p className="text-blue-600 text-sm font-medium">
                  {area.count} {area.count === 1 ? "hotel" : "hotels"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
