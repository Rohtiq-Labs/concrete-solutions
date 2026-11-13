"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import "./cta.desktop.css";
import "./cta.mobile.css";

export const Cta = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { cta } = dictionary;

  return (
    <section id="cta" className="tex">
      <div className="wrap">
        <Reveal as="h2">{cta.title}</Reveal>
        <p>{cta.body}</p>
        <a className="btn" href="#contact">
          {cta.button}
        </a>
      </div>
    </section>
  );
};
