# VoyageHub

A simple hotel booking site built with Next.js 15, TypeScript, and Tailwind CSS v4.
All data is mocked — no backend or database.

## Commands
- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture
- Next.js App Router with server components by default
- Client components: SearchForm, FilterSidebar, BookingForm, BookingConfirmation
- Mock data in `src/data/` — hotels, rooms, amenities
- Search state carried via URL params
- No global state, no API routes, no React Query

## Key Paths
- `/` — Home with hero + search form
- `/search?checkin=&checkout=&guests=` — Hotel results grid
- `/hotels/[id]` — Hotel detail page
- `/book/[roomId]?checkin=&checkout=&guests=` — Booking flow
