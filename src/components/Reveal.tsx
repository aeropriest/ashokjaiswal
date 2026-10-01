"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMode } from "./ModeProvider";

/**
 * Fade-and-rise on scroll. If IntersectionObserver never fires (headless
 * browsers, print, stalled renderers) a timer forces the element visible so
 * the content is never lost behind the animation.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const { mode } = useMode();
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setForced(true), 1400);
    return () => window.clearTimeout(t);
  }, []);

  if (mode === "simple") {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={forced ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
