import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";

type CarouselProps = {
  ariaLabel: string;
  children: ReactNode;
  slideClassName?: string;
  controlsClassName?: string;
};

export default function Carousel({ ariaLabel, children, slideClassName = "", controlsClassName = "" }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const slides = Children.toArray(children);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarouselState = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateCarouselState();
    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi]);

  return (
    <div className="carousel" role="region" aria-label={ariaLabel}>
      <div className={`mb-5 flex items-center justify-end gap-2 ${controlsClassName}`}>
        <button className="carousel-button" type="button" onClick={scrollPrev} aria-label={`Previous ${ariaLabel}`} disabled={!canScrollPrev}>
          <ChevronLeft className="size-4" />
        </button>
        <button className="carousel-button" type="button" onClick={scrollNext} aria-label={`Next ${ariaLabel}`} disabled={!canScrollNext}>
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-5">
          {slides.map((slide, index) => (
            <div key={index} className={`min-w-0 shrink-0 grow-0 ${slideClassName}`}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === selectedIndex ? "carousel-dot-active" : ""}`}
            type="button"
            aria-label={`Go to ${ariaLabel} slide ${index + 1}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
