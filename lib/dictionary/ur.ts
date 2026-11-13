import type { Dictionary } from "./types";
import { en } from "./en";

/* UR strings mirror EN for scaffold; replace with full Urdu copy later. */
export const ur: Dictionary = {
  ...en,
  nav: {
    ...en.nav,
    langEn: "EN",
    langUr: "UR",
  },
};
