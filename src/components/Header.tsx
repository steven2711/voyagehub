import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            VoyageHub
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/search?checkin=&checkout=&guests=2"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Hotels
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
