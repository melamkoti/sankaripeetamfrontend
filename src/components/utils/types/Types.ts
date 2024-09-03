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

export const navSchema = z.object({
  navLink: z.string(),
  route: z.string(),
});

export type NavTypes = z.infer<typeof navSchema>;

export interface NavListItem {
  navLink: string;
  route: string;
  childNav?: string[];
}
