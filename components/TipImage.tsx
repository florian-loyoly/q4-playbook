"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";

// Tip image with an aspect-aware height cap: tall portrait images (which would
// otherwise render too narrow) get a bigger max-height, while square and
// landscape images keep the tighter cap so they don't dominate the column.
// Clicking the image opens it in a zoomable lightbox.
export function TipImage({ src, alt }: { src: string; alt: string }) {
  const [tall, setTall] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(e) => {
          const im = e.currentTarget;
          if (im.naturalWidth > 0 && im.naturalHeight / im.naturalWidth >= 1.5) setTall(true);
        }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`${alt} (open full size)`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        style={{ maxWidth: "100%", maxHeight: tall ? 860 : 480, width: "auto", height: "auto", display: "block", borderRadius: 6, cursor: "zoom-in" }}
      />
      {open ? <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
