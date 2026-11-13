export type MediaSlot = {
  id: string;
  src: string;
  alt?: string;
};

export const MEDIA = {
  hero: {
    id: "hero",
    src: "/assets/luxury-home-pool-aerial.webp",
  },
  about: {
    id: "about",
    src: "/assets/concrete-solutions-crew-team-photo.webp",
  },
  outdoor: {
    id: "outdoor",
    src: "/assets/modern-paver-patio-fire-bowl.webp",
  },
  video: {
    id: "video",
    src: "/assets/grand-entrance-concrete-project.mp4",
  },
  videoPoster: {
    id: "video-poster",
    src: "/assets/paver-steps-stacked-stone-wall.webp",
  },
} as const satisfies Record<string, MediaSlot>;

export const SERVICE_MEDIA = {
  driveways: "/assets/checkerboard-concrete-driveway.webp",
  poolDecks: "/assets/luxury-home-pool-aerial.webp",
  patios: "/assets/curved-scored-concrete-patio.webp",
  stamped: "/assets/stamped-slate-concrete-patio.jpg",
  commercial: "/assets/costco-gas-station-concrete-pour.webp",
} as const;

export const GALLERY_MEDIA = {
  driveways: "/assets/concrete-driveway-bull-float-finishing.webp",
  patios: "/assets/scored-concrete-patio-steps.webp",
  poolDecks: "/assets/night-poolside-fire-pit-patio.jpeg",
  stamped: "/assets/stamped-concrete-patio-texture-mats.webp",
  commercial: "/assets/restaurant-concrete-ada-ramp.jpeg",
  custom: "/assets/stone-paver-patio-retaining-wall.webp",
  turf: "/assets/turf-paver-pathway-hardscape.jpeg",
  walkway: "/assets/concrete-walkway-pour-site.webp",
  firePit: "/assets/modern-paver-patio-fire-bowl.webp",
  entrance: "/assets/691f23b5a1976e8243d60b61.webp",
} as const;
