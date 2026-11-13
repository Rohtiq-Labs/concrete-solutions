"use client";

import type { JSX } from "react";
import { WHY_ITEMS } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import "./why.desktop.css";
import "./why.mobile.css";

export const Why = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { why } = dictionary;

  return (
    <section id="why">
      <div className="wrap">
        <Reveal as="h2">{why.title}</Reveal>
        <Reveal className="wy">
          {WHY_ITEMS.map((item) => (
            <div key={item}>
              <h3>{why.items[item].title}</h3>
              <p>{why.items[item].body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
