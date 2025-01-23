// https://ui.aceternity.com/components/text-generate-effect

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A cool text effect that fades in text on page load, one by one.
 *
 * @param words - The text to be displayed and animated.
 * @param className - Optional class name to apply custom styles.
 * @param filter - Optional boolean to apply a blur filter to the text. Defaults to true.
 * @param duration - Optional duration for the animation effect. Defaults to 0.5 seconds.
 *
 * @returns A JSX element that displays the animated text.
 *
 * @author AceternityUI
 */
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${["simon", "lotzkar"].includes(word.toLowerCase()) ? "text-accent" : "text-accent-light"}`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
