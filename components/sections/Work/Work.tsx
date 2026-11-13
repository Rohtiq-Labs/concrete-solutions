"use client";

import type { JSX } from "react";
import { GALLERY_ITEMS } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import "./work.desktop.css";
import "./work.mobile.css";

export const Work = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { work } = dictionary;

  return (
    <section id="work">
      <div className="wrap">
        <span className="eyebrow">{work.eyebrow}</span>
        <h2>{work.title}</h2>
      </div>
      <div className="hs" tabIndex={0} aria-label={work.galleryAria}>
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.id}>
            <PlaceholderImage
              className="tex"
              label={work.items[item.id]}
              src={item.src}
              sizes="(max-width: 640px) 78vw, 560px"
            />
            <figcaption>
              <b>{work.items[item.id]}</b>
              <span>{item.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
