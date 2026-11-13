import { GALLERY_MEDIA, SERVICE_MEDIA } from "@/data/media";

export type ServiceItem = {
  id: string;
  number: string;
  titleKey: keyof typeof SERVICE_MEDIA;
  bodyKey: keyof typeof SERVICE_MEDIA;
  src: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "driveways",
    number: "01",
    titleKey: "driveways",
    bodyKey: "driveways",
    src: SERVICE_MEDIA.driveways,
  },
  {
    id: "pool-decks",
    number: "02",
    titleKey: "poolDecks",
    bodyKey: "poolDecks",
    src: SERVICE_MEDIA.poolDecks,
  },
  {
    id: "patios",
    number: "03",
    titleKey: "patios",
    bodyKey: "patios",
    src: SERVICE_MEDIA.patios,
  },
  {
    id: "stamped",
    number: "04",
    titleKey: "stamped",
    bodyKey: "stamped",
    src: SERVICE_MEDIA.stamped,
  },
  {
    id: "commercial",
    number: "05",
    titleKey: "commercial",
    bodyKey: "commercial",
    src: SERVICE_MEDIA.commercial,
  },
];

export const OUTDOOR_ITEMS = [
  "patios",
  "sodTurf",
  "sprinklers",
  "puttingGreens",
  "pavers",
  "masonry",
  "firePits",
  "waterFeatures",
] as const;

export const WHY_ITEMS = [
  "experienced",
  "materials",
  "insured",
  "customer",
] as const;

export const PROCESS_STEPS = [
  { id: "consultation", number: "01" },
  { id: "design", number: "02" },
  { id: "prep", number: "03" },
  { id: "install", number: "04" },
  { id: "inspection", number: "05" },
  { id: "completion", number: "06" },
] as const;

export type GalleryItem = {
  id: keyof typeof GALLERY_MEDIA;
  location: string;
  src: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "driveways",
    location: "Denver, CO",
    src: GALLERY_MEDIA.driveways,
  },
  {
    id: "patios",
    location: "Denver, CO",
    src: GALLERY_MEDIA.patios,
  },
  {
    id: "poolDecks",
    location: "Denver, CO",
    src: GALLERY_MEDIA.poolDecks,
  },
  {
    id: "stamped",
    location: "Denver, CO",
    src: GALLERY_MEDIA.stamped,
  },
  {
    id: "commercial",
    location: "Denver, CO",
    src: GALLERY_MEDIA.commercial,
  },
  {
    id: "custom",
    location: "Denver, CO",
    src: GALLERY_MEDIA.custom,
  },
  {
    id: "turf",
    location: "Denver, CO",
    src: GALLERY_MEDIA.turf,
  },
  {
    id: "walkway",
    location: "Denver, CO",
    src: GALLERY_MEDIA.walkway,
  },
  {
    id: "firePit",
    location: "Denver, CO",
    src: GALLERY_MEDIA.firePit,
  },
  {
    id: "entrance",
    location: "Denver, CO",
    src: GALLERY_MEDIA.entrance,
  },
];
