import Image from "next/image";

interface IndustryLeadProps {
  name: string;
  title: string;
  imageUrl: string;
}

export function IndustryLead({ name, title, imageUrl }: IndustryLeadProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-32 w-32 rounded-full flex-shrink-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-navy-800">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}
