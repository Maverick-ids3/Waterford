"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, ImageOff } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
  title: string;
}

interface GalleryLightboxProps {
  photos?: GalleryPhoto[];
}

export function GalleryLightbox({ photos = [] }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const showPrev = useCallback(() => {
    if (selectedIndex === null || photos.length === 0) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + photos.length) % photos.length
    );
  }, [photos.length, selectedIndex]);

  const showNext = useCallback(() => {
    if (selectedIndex === null || photos.length === 0) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % photos.length
    );
  }, [photos.length, selectedIndex]);

  // Keyboard navigation: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev, closeLightbox]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        showPrev();
      } else {
        showNext();
      }
    }
    touchStartX.current = null;
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-waterford-line bg-waterford-white p-12 text-center">
        <ImageOff className="size-12 text-waterford-muted/50 mb-3" />
        <h3 className="text-lg font-bold text-waterford-charcoal">
          No photos found
        </h3>
        <p className="mt-1 text-sm text-waterford-muted max-w-sm">
          Add images to the <code className="bg-waterford-paper px-1.5 py-0.5 rounded text-waterford-gold-dark font-semibold">pictures</code> folder to display them here.
        </p>
      </div>
    );
  }

  const currentPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="w-full">
      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-waterford-line bg-waterford-charcoal text-left focus:outline-none focus:ring-4 focus:ring-waterford-gold/50 shadow-sm hover:shadow-xl transition-all"
            aria-label={`View photo ${index + 1}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-108"
            />
            {/* Subtle dark overlay with zoom icon on hover (no text) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <div className="rounded-full bg-waterford-gold p-3 text-waterford-black shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <ZoomIn className="size-5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 border-b border-white/10 text-white">
            <span className="rounded-full bg-waterford-gold px-3.5 py-1 text-xs font-black text-waterford-black">
              {selectedIndex + 1} / {photos.length}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Close image viewer"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Main Viewer Area */}
          <div className="relative flex-1 flex items-center justify-center p-4 select-none">
            {/* Previous Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-6 z-10 flex size-12 sm:size-14 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 hover:bg-waterford-gold hover:text-waterford-black hover:border-waterford-gold transition-all shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-7 sm:size-8" />
            </button>

            {/* Central Displayed Image */}
            <div className="relative max-h-[72vh] max-w-[90vw] w-full h-full flex items-center justify-center">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-h-[72vh] max-w-[90vw] object-contain rounded-lg shadow-2xl transition-all duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-6 z-10 flex size-12 sm:size-14 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 hover:bg-waterford-gold hover:text-waterford-black hover:border-waterford-gold transition-all shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="size-7 sm:size-8" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="px-4 py-3 border-t border-white/10 bg-black/60">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin justify-center">
              {photos.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative size-14 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                    idx === selectedIndex
                      ? "border-waterford-gold scale-105 shadow-md"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Jump to image ${idx + 1}`}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
