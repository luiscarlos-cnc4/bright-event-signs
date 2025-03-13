
import React, { useState } from 'react';
import { galleryCategories } from './gallery/galleryData';
import CategoryFilters from './gallery/CategoryFilters';
import ImageGrid from './gallery/ImageGrid';
import ImageModal from './gallery/ImageModal';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory
    ? galleryCategories.find(cat => cat.category === selectedCategory)?.images || []
    : galleryCategories.flatMap(cat => cat.images);

  return (
    <section id="galeria" className="py-20 bg-vegas-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Nossa Galeria</h2>
        <p className="text-vegas-gold/80 text-center mb-12 max-w-2xl mx-auto">
          Conheça um pouco do nosso trabalho através das imagens dos eventos que realizamos
        </p>
        
        <CategoryFilters 
          categories={galleryCategories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        
        <ImageGrid 
          images={filteredImages} 
          onImageClick={(imageSrc) => setSelectedImage(imageSrc)} 
        />
        
        <ImageModal 
          imageSrc={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      </div>
    </section>
  );
};

export default Gallery;
