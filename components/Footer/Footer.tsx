"use client";

import { useEffect, useState, type JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import "./footer.desktop.css";
import "./footer.mobile.css";

export const Footer = (): JSX.Element => {
  const { dictionary } = useLocale();
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const copyright = dictionary.footer.copyright.replace("{year}", String(year));

  return (
    <footer>
      <div className="wrap">
        <div className="footer__g">
          <div>
            <a className="logo" href="#hero">
              <i aria-hidden="true" />
              {SITE.brand}
            </a>
            <p className="footer__tagline">{dictionary.footer.tagline}</p>
          </div>
          <div>
            <h4>{dictionary.footer.navigate}</h4>
            <ul>
              <li>
                <a href="#about">{dictionary.nav.about}</a>
              </li>
              <li>
                <a href="#work">{dictionary.nav.gallery}</a>
              </li>
              <li>
                <a href="#finance">{dictionary.nav.financing}</a>
              </li>
              <li>
                <a href="#contact">{dictionary.nav.contact}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{dictionary.footer.services}</h4>
            <ul>
              <li>
                <a href="#services">{dictionary.footer.serviceLinks.driveways}</a>
              </li>
              <li>
                <a href="#services">{dictionary.footer.serviceLinks.poolDecks}</a>
              </li>
              <li>
                <a href="#services">{dictionary.footer.serviceLinks.patios}</a>
              </li>
              <li>
                <a href="#services">{dictionary.footer.serviceLinks.stamped}</a>
              </li>
              <li>
                <a href="#services">{dictionary.footer.serviceLinks.commercial}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{dictionary.footer.contact}</h4>
            <ul>
              <li>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>{SITE.location}</li>
              <li>{SITE.socialNote}</li>
            </ul>
          </div>
        </div>
        <div className="footer__big" aria-hidden="true">
          {dictionary.footer.brandMark}
        </div>
        <small>{copyright}</small>
        <p className="footer__credit">
          {dictionary.footer.developedBy}{" "}
          <a
            href={SITE.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dictionary.footer.developerAria}
          >
            {SITE.developerName}
          </a>
        </p>
      </div>
    </footer>
  );
};
