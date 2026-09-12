import { useEffect, useState } from "react";

const CHAR_DELAY = 26;
const LINE_PAUSE = 350;

// Types out `lines` (array of { text }) one character at a time.
// Restarts whenever `lines` changes (e.g. language toggle) via resetKey.
export default function useTypedLines(lines, resetKey) {
  const [output, setOutput] = useState(() => lines.map(() => ""));
  const [activeIndex, setActiveIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setOutput(lines.map((line) => line.text));
      setActiveIndex(lines.length);
      setDone(true);
      return undefined;
    }

    setOutput(lines.map(() => ""));
    setActiveIndex(0);
    setDone(false);

    let cancelled = false;
    let timeoutId;

    function typeLine(lineIndex, charIndex) {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      setActiveIndex(lineIndex);
      const text = lines[lineIndex].text;
      setOutput((prev) => {
        const next = [...prev];
        next[lineIndex] = text.slice(0, charIndex);
        return next;
      });

      if (charIndex < text.length) {
        timeoutId = setTimeout(() => typeLine(lineIndex, charIndex + 1), CHAR_DELAY);
      } else {
        timeoutId = setTimeout(() => typeLine(lineIndex + 1, 1), LINE_PAUSE);
      }
    }

    timeoutId = setTimeout(() => typeLine(0, 1), LINE_PAUSE);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines, resetKey]);

  return { output, activeIndex, done };
}
