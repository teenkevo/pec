// app/about-us/HashScroll.tsx (or any path you prefer)
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScroll({
  headerOffset = 80,
}: {
  headerOffset?: number;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const getHash = () =>
      decodeURIComponent(window.location.hash || "").slice(1);

    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;

      // If you add CSS `scroll-margin-top`, you can use el.scrollIntoView({block:"start"})
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y });
      return true;
    };

    // Try immediately; if element isn't there yet, observe until it is.
    const tryNowOrObserve = () => {
      const id = getHash();
      if (!id) return undefined;
      if (scrollToId(id)) return undefined;

      const mo = new MutationObserver(() => {
        if (scrollToId(id)) mo.disconnect();
      });
      mo.observe(document, { childList: true, subtree: true });
      return () => mo.disconnect();
    };

    const cleanupObserver = tryNowOrObserve();

    const onHashChange = () => {
      const id = getHash();
      if (id) scrollToId(id);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      cleanupObserver?.();
    };
  }, [pathname, headerOffset]); // re-run on route changes

  return null;
}
