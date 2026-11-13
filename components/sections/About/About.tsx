"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./about.desktop.css";
import "./about.mobile.css";

export const About = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { about } = dictionary;

  return (
    <section id="about">
      <div className="wrap about__g">
        <Reveal>
          <span className="eyebrow eyebrow--red">{about.eyebrow}</span>
          <h2>
            {about.title} <span>{about.titleEm}</span>
          </h2>
          <p className="about__body">{about.body}</p>
          <div className="facts">
            {about.facts.map((fact) => (
              <div key={fact.value + fact.label}>
                <b>{fact.value}</b>
                {fact.label}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <PlaceholderImage
            className="about__slot"
            label={about.imageLabel}
            src={MEDIA.about.src}
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </Reveal>
      </div>
    </section>
  );
};
