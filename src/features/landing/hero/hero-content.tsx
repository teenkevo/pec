interface HeroContentProps {
  title: string;
}

export function HeroContent({ title }: HeroContentProps) {
  return (
    <div className="px-4 md:px-14 absolute bottom-16 max-w-5xl">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-10">
        {title}
      </h1>
    </div>
  );
}
