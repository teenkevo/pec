import Image from "next/image";

interface BackgroundImageProps {
  imageUrl: string;
  alt: string;
}

export function BackgroundImage({ imageUrl, alt }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 z-0">
      <div className="relative h-full w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Top gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      </div>
    </div>
  );
}
