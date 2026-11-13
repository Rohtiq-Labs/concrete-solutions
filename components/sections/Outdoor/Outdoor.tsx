"use client";

import type { JSX } from "react";
import { OUTDOOR_ITEMS } from "@/data/services";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./outdoor.desktop.css";
import "./outdoor.mobile.css";

export const Outdoor = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { outdoor } = dictionary;

  return (
    <section id="outdoor">
      <div className="wrap">
        <span className="eyebrow">{outdoor.eyebrow}</span>
        <Reveal as="h2">
          {outdoor.title} <span>{outdoor.titleEm}</span>
        </Reveal>
        <p>{outdoor.body}</p>
        <ul>
          {OUTDOOR_ITEMS.map((item) => (
            <li key={item}>{outdoor.items[item]}</li>
          ))}
        </ul>
        <PlaceholderImage
          className="os"
          label={outdoor.imageLabel}
          src={MEDIA.outdoor.src}
          sizes="(max-width: 640px) 100vw, 900px"
        />
      </div>
    </section>
  );
};
