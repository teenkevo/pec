interface HeroContentProps {
  title: string;
  industry: string;
}

export function HeroContent({ title, industry }: HeroContentProps) {
  return (
    <div className="px-4 md:px-14 absolute bottom-16 max-w-5xl">
      <span className="inline-block bg-[#EB3300] text-white font-bold px-3 py-1 text-lg mb-4">
        {industry}
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-10">
        {title}
      </h1>
    </div>
  );
}
