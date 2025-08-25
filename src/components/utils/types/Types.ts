import { z } from "zod";

export const IconSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export type IconType = z.infer<typeof IconSchema>;

export const IconPropSchema = z.object({
  item: IconSchema,
});

export type IconPropType = z.infer<typeof IconPropSchema>;

export interface ChildNavItem {
  name: string;
  route: string;
  district?: string;
}

export interface NavListItem {
  navLink: string;
  route: string;
  childNav?: ChildNavItem[];
}

export interface Content {
  title: string;
  description: string;
}

export interface CardProps {
  id: number;
  images: string[]; // Array of image URLs
  content: Content;
}

export interface CardSliderProps {
  cards: CardProps; // Array of Card objects
}
