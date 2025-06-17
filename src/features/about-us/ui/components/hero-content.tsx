interface HeroContentProps {
  title: string;
  page: string;
}

export function HeroContent({ title, page }: HeroContentProps) {
  return (
    <div className="px-4 md:px-14 absolute bottom-5 md:bottom-16 max-w-5xl">
      <span className="text-white py-1 text-lg">{page}</span>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-10 mt-5">
        {title}
      </h1>
    </div>
  );
}
