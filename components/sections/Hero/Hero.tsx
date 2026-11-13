"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import "./hero.desktop.css";
import "./hero.mobile.css";

export const Hero = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section id="hero" className="tex">
      <div className="bar" aria-hidden="true" />
      <PlaceholderImage
        className="hp"
        label={hero.imageLabel}
        src={MEDIA.hero.src}
        priority
        sizes="(max-width: 640px) 100vw, 32vw"
      />
      <div className="wrap">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>
          {hero.line1}
          <em>{hero.line2}</em>
        </h1>
        <p>{hero.sub}</p>
        <div className="cta">
          <a className="btn" href="#contact">
            {hero.cta}
          </a>
          <a className="btn ghost" href="#work">
            {hero.explore}
          </a>
        </div>
      </div>
    </section>
  );
};
