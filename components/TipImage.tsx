"use client";

import { useState } from "react";

// Tip image with an aspect-aware height cap: tall portrait images (which would
// otherwise render too narrow) get a bigger max-height, while square and
// landscape images keep the tighter cap so they don't dominate the column.
export function TipImage({ src, alt }: { src: string; alt: string }) {
  const [tall, setTall] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={(e) => {
        const im = e.currentTarget;
        if (im.naturalWidth > 0 && im.naturalHeight / im.naturalWidth >= 1.5) setTall(true);
      }}
      style={{ maxWidth: "100%", maxHeight: tall ? 860 : 480, width: "auto", height: "auto", display: "block", borderRadius: 6 }}
    />
  );
}
