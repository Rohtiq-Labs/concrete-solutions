export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    homeAria: string;
    primaryAria: string;
    menu: string;
    close: string;
    home: string;
    about: string;
    services: string;
    gallery: string;
    financing: string;
    contact: string;
    quote: string;
    langEn: string;
    langUr: string;
    langSwitchAria: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    cta: string;
    explore: string;
    imageLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleEm: string;
    body: string;
    imageLabel: string;
    facts: Array<{ value: string; label: string }>;
  };
  services: {
    eyebrow: string;
    title: string;
    items: {
      driveways: { title: string; body: string; photoLabel: string };
      poolDecks: { title: string; body: string; photoLabel: string };
      patios: { title: string; body: string; photoLabel: string };
      stamped: { title: string; body: string; photoLabel: string };
      commercial: { title: string; body: string; photoLabel: string };
    };
  };
  outdoor: {
    eyebrow: string;
    title: string;
    titleEm: string;
    body: string;
    imageLabel: string;
    items: {
      patios: string;
      sodTurf: string;
      sprinklers: string;
      puttingGreens: string;
      pavers: string;
      masonry: string;
      firePits: string;
      waterFeatures: string;
    };
  };
  why: {
    title: string;
    items: {
      experienced: { title: string; body: string };
      materials: { title: string; body: string };
      insured: { title: string; body: string };
      customer: { title: string; body: string };
    };
  };
  process: {
    eyebrow: string;
    title: string;
    steps: {
      consultation: { title: string; body: string };
      design: { title: string; body: string };
      prep: { title: string; body: string };
      install: { title: string; body: string };
      inspection: { title: string; body: string };
      completion: { title: string; body: string };
    };
  };
  work: {
    eyebrow: string;
    title: string;
    galleryAria: string;
    photoLabel: string;
    items: {
      driveways: string;
      patios: string;
      poolDecks: string;
      stamped: string;
      commercial: string;
      custom: string;
      turf: string;
      walkway: string;
      firePit: string;
      entrance: string;
    };
  };
  video: {
    eyebrow: string;
    title: string;
    playAria: string;
    placeholder: string;
    missing: string;
  };
  finance: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  cta: {
    title: string;
    body: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    form: {
      name: string;
      phone: string;
      email: string;
      address: string;
      details: string;
      startDate: string;
      submit: string;
      sending: string;
      requiredError: string;
      success: string;
      fixFields: string;
    };
  };
  footer: {
    tagline: string;
    navigate: string;
    services: string;
    contact: string;
    brandMark: string;
    copyright: string;
    developedBy: string;
    developerAria: string;
    serviceLinks: {
      driveways: string;
      poolDecks: string;
      patios: string;
      stamped: string;
      commercial: string;
    };
  };
};
