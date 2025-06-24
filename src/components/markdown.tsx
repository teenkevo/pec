import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Type for your Sanity portable text data
type PortableTextData = (PortableTextBlock | any)[];

interface MarkdownProps {
  markdown: PortableTextData;
}

// Custom components for PortableText
const components: PortableTextComponents = {
  block: {
    // Normal paragraph
    normal: ({ children }) => (
      <p className="text-lg my-4 leading-relaxed last:mb-0">{children}</p>
    ),

    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mb-2">{children}</h4>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },

  marks: {
    // Strong/bold text
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),

    // Emphasis/italic text
    em: ({ children }) => <em className="italic font-medium">{children}</em>,

    // Code marks
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),

    // Links
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
          className="text-[#EB3300]/90 underline hover:text-[#EB3300] transition-colors"
        >
          {children}
        </a>
      );
    },
  },

  list: {
    // Bullet lists
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 space-y-2 my-4">{children}</ul>
    ),

    // Numbered lists
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 space-y-2 my-4">
        {children}
      </ol>
    ),
  },

  listItem: {
    // List items
    bullet: ({ children }) => (
      <li className="text-lg leading-relaxed pl-1">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed pl-1">{children}</li>
    ),
  },

  types: {
    // Image handling
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <div className="my-6">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Image"}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    },
  },
};

const Markdown = ({ markdown }: MarkdownProps) => {
  return (
    <article className="max-w-none">
      <PortableText value={markdown} components={components} />
    </article>
  );
};

export default Markdown;
