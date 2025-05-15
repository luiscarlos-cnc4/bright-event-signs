
import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  return (
    <Dialog open={!!imageSrc} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-vegas-black border-vegas-gold/30">
        <DialogTitle>
          <VisuallyHidden>Visualização da imagem</VisuallyHidden>
        </DialogTitle>
        {imageSrc && (
          <div aria-describedby="gallery-image-description">
            <img
              src={imageSrc}
              alt="Imagem ampliada"
              className="w-full h-auto"
            />
            <div id="gallery-image-description" className="sr-only">
              Visualização ampliada da foto
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
