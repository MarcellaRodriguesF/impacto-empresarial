import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** atraso em segundos */
  delay?: number;
  /** distância vertical inicial em px */
  y?: number;
  className?: string;
  /** renderiza como outra tag (ex.: "li", "span") */
  as?: "div" | "li" | "span" | "section";
};

/**
 * Scroll reveal refinado e reutilizável.
 * Movimento sutil + fade, dispara uma única vez ao entrar na viewport.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
