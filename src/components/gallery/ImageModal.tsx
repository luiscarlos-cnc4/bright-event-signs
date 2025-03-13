
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  return (
    <Dialog open={!!imageSrc} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-vegas-black border-vegas-gold/30">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Imagem ampliada"
            className="w-full h-auto"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
