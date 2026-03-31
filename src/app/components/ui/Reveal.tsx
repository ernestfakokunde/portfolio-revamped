"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes } from "react";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
}

const transformMap: Record<RevealDirection, string> = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(32px, 0, 0)",
  right: "translate3d(-32px, 0, 0)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const revealStyle = {
    ...style,
    "--reveal-delay": `${delay}ms`,
    "--reveal-transform": transformMap[direction],
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-visible={isVisible}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}
