"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";

export function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndex,
}: {
  images: string[];
  index: number | null;
  title: string;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;
  const prev = useCallback(
    () => index !== null && onIndex((index - 1 + images.length) % images.length),
    [index, images.length, onIndex],
  );
  const next = useCallback(
    () => index !== null && onIndex((index + 1) % images.length),
    [index, images.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, prev, next]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <motion.img
            key={images[index]}
            src={asset(images[index])}
            alt={`${title} screenshot ${index + 1}`}
            className="max-h-[88vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {title} · {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
