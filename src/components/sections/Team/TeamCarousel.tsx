import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProfessionalCard } from "./ProfessionalCard";
import type { Professional } from "@/types";

interface TeamCarouselProps {
  professionals: Professional[];
  onSelectProfessional: (professional: Professional) => void;
}

/**
 * Carrossel headless (Embla cuida da física de drag/swipe/snap; todo o
 * visual é Tailwind). Escala para qualquer quantidade de profissionais via
 * .map() — não há nada hardcoded para "7".
 */
export function TeamCarousel({ professionals, onSelectProfessional }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    updateState();
    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);
    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") scrollPrev();
    if (event.key === "ArrowRight") scrollNext();
  };

  return (
    <div className="relative">
      <div
        ref={emblaRef}
        className="overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carrossel de profissionais da AURAZ"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="-ml-4 flex sm:-ml-6">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_50%] sm:pl-6 lg:flex-[0_0_33.333%]"
            >
              <ProfessionalCard professional={professional} onSelect={onSelectProfessional} />
            </div>
          ))}
        </div>
      </div>

      {/* Setas — ocultas em mobile, onde o swipe nativo assume a navegação */}
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Ver profissional anterior"
        className="absolute left-0 top-[38%] hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-surface p-3 text-text-primary shadow-lg shadow-text-primary/10 transition-all duration-300 hover:bg-bg-secondary disabled:cursor-not-allowed disabled:opacity-30 md:flex"
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Ver próxima profissional"
        className="absolute right-0 top-[38%] hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-surface p-3 text-text-primary shadow-lg shadow-text-primary/10 transition-all duration-300 hover:bg-bg-secondary disabled:cursor-not-allowed disabled:opacity-30 md:flex"
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>

      {/* Paginação discreta */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Ir para o grupo ${index + 1} de profissionais`}
            aria-current={index === selectedIndex}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "w-6 bg-accent" : "w-1.5 bg-text-secondary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
