"use client";

import { useEffect, useRef, type JSX } from "react";
import { PROCESS_STEPS } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import "./process.desktop.css";
import "./process.mobile.css";

export const Process = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { process } = dictionary;
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) {
      return;
    }

    const updateProgress = (): void => {
      const rect = node.getBoundingClientRect();
      const progress =
        ((window.innerHeight * 0.6 - rect.top) / rect.height) * 100;
      node.style.setProperty(
        "--p",
        `${Math.max(0, Math.min(100, progress))}%`,
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section id="process">
      <div className="wrap">
        <span className="eyebrow">{process.eyebrow}</span>
        <h2>{process.title}</h2>
        <div className="tl" id="tl" ref={timelineRef}>
          {PROCESS_STEPS.map((step) => {
            const copy = process.steps[step.id];
            return (
              <Reveal key={step.id} className="st">
                <b>{step.number}</b>
                <h3>{copy.title}</h3>
                <p>{copy.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
