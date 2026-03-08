export default function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${stars} stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < stars ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
