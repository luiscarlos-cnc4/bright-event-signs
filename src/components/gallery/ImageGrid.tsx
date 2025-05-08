
import React from 'react';
import { GalleryImage } from './types';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageGridProps {
  images: GalleryImage[];
  onImageClick: (imageSrc: string) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images?.map((image, index) => (
        <div 
          key={index}
          className="relative group overflow-hidden rounded-xl animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <AspectRatio ratio={16 / 9} className="bg-vegas-black/50">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              onClick={() => onImageClick(image.src)}
            />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
