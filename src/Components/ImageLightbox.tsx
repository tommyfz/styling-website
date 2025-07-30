"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type LightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const [direction, setDirection] = useState<1 | -1>(1);

  // Prefetch surrounding images
  useEffect(() => {
    const preload = (src: string) => {
      const img: HTMLImageElement = document.createElement("img");
      img.src = src;
    };

    preload(images[(currentIndex + 1) % images.length]);
    preload(images[(currentIndex - 1 + images.length) % images.length]);
  }, [currentIndex, images]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        onPrev();
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        onNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  const currentImage = images[currentIndex];

  console.log(currentImage);
  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={currentIndex}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
          key={currentImage}
          custom={direction}
          initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) {
              setDirection(1);
              onNext();
            } else if (info.offset.x > 100) {
              setDirection(-1);
              onPrev();
            }
          }}
        >
          <Image
            src={currentImage}
            alt="lightbox"
            fill
            className="object-contain rounded-lg shadow-lg select-none pointer-events-none"
            priority
          />

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              setDirection(-1);
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full px-3 py-1"
          >
            ‹
          </button>
          <button
            onClick={() => {
              setDirection(1);
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full px-3 py-1"
          >
            ›
          </button>

          {/* Close (X) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl bg-black/50 hover:bg-black/70 rounded-full px-3 py-1"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
