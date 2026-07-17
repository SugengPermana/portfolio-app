"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/** Edit this list to change rotating roles */
export const ROLES = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Cloud Engineer"
] as const;

const PAUSE_MS = 2000;
const TYPE_MIN = 55;
const TYPE_MAX = 95;
const DELETE_MIN = 28;
const DELETE_MAX = 48;

function randomDelay(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const schedule = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };

  useEffect(() => {
    clearTimers();
    const full = ROLES[roleIndex];

    if (phase === "typing") {
      if (display.length < full.length) {
        schedule(
          () => setDisplay(full.slice(0, display.length + 1)),
          randomDelay(TYPE_MIN, TYPE_MAX)
        );
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      schedule(() => setPhase("deleting"), PAUSE_MS);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        schedule(
          () => setDisplay((prev) => prev.slice(0, -1)),
          randomDelay(DELETE_MIN, DELETE_MAX)
        );
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }

    return clearTimers;
  }, [display, phase, roleIndex]);

  return (
    <motion.h2
      key={roleIndex}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="text-2xl md:text-4xl  font-light font-mono inline-flex items-baseline min-h-[1.5em]"
      aria-live="polite"
      aria-label={ROLES[roleIndex]}
    >
      <span className="bg-linear-to-r from-foreground via-muted-foreground to-foreground/70 bg-clip-text text-transparent">
        {display}
      </span>
      <motion.span
        aria-hidden
        className="ml-0.5 text-foreground font-light"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          times: [0, 0.5, 0.5, 1],
          ease: "linear",
        }}
      >
        |
      </motion.span>
    </motion.h2>
  );
}
