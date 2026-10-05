"use client";

import Image from "next/image";
import { useState } from "react";
import { images, type ImageKey } from "@/data/images";
import { FanMark } from "./FanMark";

type Props = { name: ImageKey; sizes: string; priority?: boolean; className?: string };

/**
 * Renders an image from the central images config. Fills its parent (give the parent an aspect ratio).
 * If the file fails to load, shows a branded placeholder so the layout never breaks.
 */
export function SmartImage({ name, sizes, priority = false, className = "" }: Props) {
  const img = images[name];
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={img.alt} className="relative flex h-full w-full items-end bg-navy p-4 text-white/70">
        <FanMark className="absolute right-4 top-4 h-16 w-16 opacity-60" />
        <span className="text-xs">Photo to be added</span>
      </div>
    );
  }

  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
