"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: string;
}

export function useScrollAnimation({
  threshold = 0.15,
  once = true,
  margin = "0px 0px -80px 0px",
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once,
    margin: margin as any,
    amount: threshold,
  });

  return { ref, isInView };
}
