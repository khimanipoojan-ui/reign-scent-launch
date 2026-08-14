import reignImg from "@/assets/reign-hero.jpg";
import nobleImg from "@/assets/noble.jpg";
import regalImg from "@/assets/regal.jpg";
import throneImg from "@/assets/throne.jpg";
import orionImg from "@/assets/orion.jpg";

export type Product = {
  id: string;
  name: string;
  size: string;
  /** Swap this path with real SARKAR product photography when available. */
  image: string;
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
    tags: ["UNISEX", "SPICY", "PARFUM"],
    occasions: "EVERYDAY • EVENINGS • SIGNATURE MOMENTS",
    description: "It smells like confidence, spice and a lasting impression.",
    price: 1499,
    isNew: true,
  },
  {
    id: "noble",
    name: "NOBLE",
    size: "100ML",
    image: nobleImg,
    tags: ["UNISEX", "FRESH", "PARFUM"],
    occasions: "DAYTIME • OFFICE • EVERYDAY",
    description: "It smells like clean linen, citrus air and quiet authority.",
    price: 1499,
  },
  {
    id: "regal",
    name: "REGAL",
    size: "100ML",
    image: regalImg,
    tags: ["UNISEX", "GREEN", "PARFUM"],
    occasions: "MORNINGS • WEEKENDS • OUTDOORS",
    description: "It smells like crushed leaves, cool air and easy elegance.",
    price: 1499,
  },
  {
    id: "throne",
    name: "THRONE",
    size: "100ML",
    image: throneImg,
    tags: ["UNISEX", "WOODY", "PARFUM"],
    occasions: "EVENINGS • DINNERS • LATE NIGHTS",
    description: "It smells like dark wood, smoke and unhurried power.",
    price: 1499,
  },
];

export const collection = [
  { id: "orion", name: "ORION", image: orionImg },
  { id: "noble", name: "NOBLE", image: nobleImg },
  { id: "regal", name: "REGAL", image: regalImg },
  { id: "throne", name: "THRONE", image: throneImg },
  { id: "reign", name: "REIGN", image: reignImg, isNew: true },
];
