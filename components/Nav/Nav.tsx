"use client";

import { useEffect, useState, type JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import "./nav.desktop.css";
import "./nav.mobile.css";

export const Nav = (): JSX.Element => {
  const { dictionary, locale, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const toggleLocale = (): void => {
    setLocale(locale === "EN" ? "UR" : "EN");
  };

  return (
    <nav aria-label={dictionary.nav.primaryAria}>
      <div className="wrap nav__in">
        <a
          className="logo"
          href="#hero"
          aria-label={dictionary.nav.homeAria}
          onClick={closeMenu}
        >
          <i aria-hidden="true" />
          {SITE.brand}
        </a>
        <button
          className="burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? dictionary.nav.close : dictionary.nav.menu}
        </button>
        <div
          className={`links ${menuOpen ? "open" : ""}`.trim()}
          id="primary-links"
        >
          <a href="#hero" onClick={closeMenu}>
            {dictionary.nav.home}
          </a>
          <a href="#about" onClick={closeMenu}>
            {dictionary.nav.about}
          </a>
          <a href="#services" onClick={closeMenu}>
            {dictionary.nav.services}
          </a>
          <a href="#work" onClick={closeMenu}>
            {dictionary.nav.gallery}
          </a>
          <a href="#finance" onClick={closeMenu}>
            {dictionary.nav.financing}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {dictionary.nav.contact}
          </a>
          <button
            className="lang"
            type="button"
            onClick={toggleLocale}
            aria-label={dictionary.nav.langSwitchAria}
          >
            {locale === "EN" ? dictionary.nav.langUr : dictionary.nav.langEn}
          </button>
          <a className="btn" href="#contact" onClick={closeMenu}>
            {dictionary.nav.quote}
          </a>
        </div>
      </div>
    </nav>
  );
};
