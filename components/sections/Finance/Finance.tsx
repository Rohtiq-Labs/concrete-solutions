"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import "./finance.desktop.css";
import "./finance.mobile.css";

export const Finance = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { finance } = dictionary;

  return (
    <section id="finance">
      <div className="wrap">
        <span className="eyebrow eyebrow--red">{finance.eyebrow}</span>
        <Reveal as="h2">{finance.title}</Reveal>
        <p>{finance.body}</p>
        <a className="btn" href="#contact">
          {finance.cta}
        </a>
      </div>
    </section>
  );
};
