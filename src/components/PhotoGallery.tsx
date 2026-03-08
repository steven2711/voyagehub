import Image from "next/image";

export default function PhotoGallery({
  images,
  altText,
}: {
  images: string[];
  altText: string;
}) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-lg overflow-hidden">
      <div className="col-span-2 row-span-2 relative h-64 md:h-80 bg-gray-200">
        <Image
          src={images[0]}
          alt={altText}
          fill
          className="object-cover"
        />
      </div>
      {images.slice(1, 5).map((img, i) => (
        <div key={i} className="relative h-32 md:h-[calc(10rem-0.25rem)] bg-gray-200">
          <Image
            src={img}
            alt={`${altText} photo ${i + 2}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
