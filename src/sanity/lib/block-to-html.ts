import { urlFor } from "@/sanity/lib/image";

export const blockToHtml = (blocks: any) => {
  let html = "";
  let currentListType: string | null = null;

  blocks.forEach((block: any, index: number) => {
    if (block._type === "block") {
      if (block.listItem) {
        const tag = block.listItem === "bullet" ? "ul" : "ol";

        if (currentListType !== tag) {
          if (currentListType) {
            html += `</${currentListType}>`;
          }
          html += `<${tag}>`;
          currentListType = tag;
        }

        html += `<li>${getText(block)}</li>`;

        if (
          index === blocks.length - 1 ||
          !blocks[index + 1]?.listItem
        ) {
          html += `</${currentListType}>`;
          currentListType = null;
        }
      } else {
        switch (block.style) {
          case "h2":
            html += `<h2>${getText(block)}</h2>`;
            break;
          case "h3":
            html += `<h3>${getText(block)}</h3>`;
            break;
          case "blockquote":
            html += `<blockquote>${getText(block)}</blockquote>`;
            break;
          default:
            html += `<p>${getText(block)}</p>`;
        }
      }
    } else if (block._type === "image") {
      html += `<img src="${urlFor(block).url()}" alt="${"Civic Advisory Hub " + block.alt}" />`;
    }
  });

  return html;
};

const getText = (block: any) => {
  return block.children
    .map((child: any) => {
      if (child.marks?.includes("strong")) {
        return `<strong>${child.text}</strong>`;
      }
      return child.text;
    })
    .join("");
};
