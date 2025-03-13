
import { LucideIcon } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryCategory = {
  icon: LucideIcon;
  category: string;
  images: GalleryImage[];
};
