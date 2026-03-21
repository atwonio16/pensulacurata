import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/6.jpg", alt: "Lucrare în desfășurare" },
  { src: "/images/5.jpg", alt: "Pregătire suprafață" },
  { src: "/images/4.jpg", alt: "Aplicare vopsea" },
  { src: "/images/2.jpg", alt: "Protecție mobilier" },
  { src: "/images/eu.jpg", alt: "La lucru" },
  { src: "/images/SnapInsta.to_454365623_3837212746507705_8045164492765312489_n.jpg", alt: "Finisare tavan" },
];

export function Gallery() {
  const [current, setCurrent] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Swipe detection - minimum distance for swipe
  const minSwipeDistance = 50;

  const open = (i: number) => {
    setCurrent(i);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setCurrent(null);
    document.body.style.overflow = "auto";
  };

  const prev = () => {
    if (current === null) return;
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const next = () => {
    if (current === null) return;
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  // Touch event handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  // Mouse drag handlers for desktop swipe
  const [mouseDown, setMouseDown] = useState<number | null>(null);
  const [mouseUp, setMouseUp] = useState<number | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    setMouseUp(null);
    setMouseDown(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    setMouseUp(e.clientX);
  };

  useEffect(() => {
    if (mouseDown === null || mouseUp === null) return;
    const distance = mouseDown - mouseUp;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
    setMouseDown(null);
    setMouseUp(null);
  }, [mouseDown, mouseUp]);

  return (
    <section id="lucrari" className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Din lucru
          </h2>
          <p className="text-grey-600">
            Câteva fotografii de la lucrări.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="relative aspect-square bg-grey-100 rounded-lg overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox with swipe support */}
      {current !== null && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white"
            aria-label="Închide"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20"
            aria-label="Următor"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-[90vw] max-h-[80vh] px-4 cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg select-none"
              draggable={false}
            />
            <p className="text-white/80 text-center mt-4 text-sm">
              {current + 1} / {images.length}
            </p>
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs md:hidden">
            Glisează pentru a naviga
          </p>
        </div>
      )}
    </section>
  );
}
