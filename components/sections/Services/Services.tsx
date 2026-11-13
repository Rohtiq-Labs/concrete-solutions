"use client";

import { useState, type JSX } from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import "./services.desktop.css";
import "./services.mobile.css";

export const Services = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { services } = dictionary;
  const [activeId, setActiveId] = useState(SERVICES[0]?.id ?? "");

  return (
    <section id="services">
      <div className="wrap">
        <span className="eyebrow">{services.eyebrow}</span>
        <Reveal as="h2">{services.title}</Reveal>
        <Reveal className="sv">
          {SERVICES.map((service) => {
            const copy = services.items[service.titleKey];
            const isActive = activeId === service.id;

            return (
              <article
                key={service.id}
                tabIndex={0}
                className={isActive ? "act" : undefined}
                onClick={() => setActiveId(service.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveId(service.id);
                  }
                }}
              >
                <span className="ph" aria-hidden="true">
                  <Image
                    src={service.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </span>
                <span className="n">{service.number}</span>
                <div>
                  <h3>{copy.title}</h3>
                  <p>{copy.body}</p>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
