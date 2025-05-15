
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"
import { type UseEmblaCarouselType } from "embla-carousel-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useCarousel(api?: UseEmblaCarouselType[1]) {
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  
  const onSelect = () => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }
  
  useEffect(() => {
    if (!api) {
      return
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])
  
  return {
    canScrollPrev,
    canScrollNext,
  }
}
