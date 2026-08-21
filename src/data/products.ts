import reignImg from "@/assets/reign-hero.webp";
import reignThumb from "@/assets/reign-hero-sm.webp";
import nobleThumb from "@/assets/noble-sm.webp";
import regalThumb from "@/assets/regal-sm.webp";
import throneThumb from "@/assets/throne-sm.webp";
import orionThumb from "@/assets/orion-sm.webp";
import nobleImg from "@/assets/noble.webp";
import regalImg from "@/assets/regal.webp";
import throneImg from "@/assets/throne.webp";
import orionImg from "@/assets/orion.webp";

export type Product = {
  id: string;
  name: string;
  size: string;
  /** Swap this path with real SARKAR product photography when available. */
  image: string;
  thumb: string;
  tags: string[];
  occasions: string;
  description: string;
  price: number;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "reign",
    name: "REIGN",
    size: "100ML",
    image: reignImg,
    thumb: reignThumb,
    tags: ["UNISEX", "SPICY", "PARFUM"],
    occasions: "EVERYDAY • EVENINGS • SIGNATURE MOMENTS",
    description: "It smells like confidence, spice and a lasting impression.",
    price: 100000,
    isNew: true,
  },
  {
    id: "noble",
    name: "NOBLE",
    size: "100ML",
    image: nobleImg,
    thumb: nobleThumb,
    tags: ["UNISEX", "FRESH", "PARFUM"],
    occasions: "DAYTIME • OFFICE • EVERYDAY",
    description: "It smells like clean linen, citrus air and quiet authority.",
    price: 100000,
  },
  {
    id: "regal",
    name: "REGAL",
    size: "100ML",
    image: regalImg,
    thumb: regalThumb,
    tags: ["UNISEX", "GREEN", "PARFUM"],
    occasions: "MORNINGS • WEEKENDS • OUTDOORS",
    description: "It smells like crushed leaves, cool air and easy elegance.",
    price: 100000,
  },
  {
    id: "throne",
    name: "THRONE",
    size: "100ML",
    image: throneImg,
    thumb: throneThumb,
    tags: ["UNISEX", "WOODY", "PARFUM"],
    occasions: "EVENINGS • DINNERS • LATE NIGHTS",
    description: "It smells like dark wood, smoke and unhurried power.",
    price: 100000,
  },
];

export const collection = [
  { id: "orion", name: "ORION", image: orionImg, thumb: orionThumb },
  { id: "noble", name: "NOBLE", image: nobleImg, thumb: nobleThumb },
  { id: "regal", name: "REGAL", image: regalImg, thumb: regalThumb },
  { id: "throne", name: "THRONE", image: throneImg, thumb: throneThumb },
  { id: "reign", name: "REIGN", image: reignImg,
    thumb: reignThumb, isNew: true },
];
