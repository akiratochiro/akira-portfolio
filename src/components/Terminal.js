import { useMemo } from "react";
import useTypedLines from "../hooks/useTypedLines";
import { content, t } from "../translations/content";

const PROJECT_SLUGS = ["in-my-fridge", "shortyourlink", "kanbix"];

export default function Terminal({ language }) {
  const lines = useMemo(
    () => [
      { prompt: "$", text: "whoami" },
      { prompt: ">", text: `Akira Tochiro — ${t(content.header.title, language)}` },
      { prompt: "$", text: "cat status" },
      {
        prompt: ">",
        text: `${t(content.header.status, language)} · ${t(content.header.location, language)}`,
      },
      { prompt: "$", text: "ls projects/" },
      { prompt: ">", text: PROJECT_SLUGS.join("  ") },
    ],
    [language]
  );

  const { output, activeIndex, done } = useTypedLines(lines, language);

  return (
    <div className="terminal-window" aria-hidden="true">
      <div className="terminal-titlebar">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--yellow" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-titletext">akira@portfolio: ~</span>
      </div>

      <div className="terminal-body">
        {lines.map((line, i) => (
          <p className="terminal-line" key={i}>
            <span
              className={`terminal-prompt terminal-prompt--${
                line.prompt === "$" ? "cmd" : "out"
              }`}
            >
              {line.prompt}
            </span>{" "}
            <span className="terminal-text">{output[i]}</span>
            {i === activeIndex && !done && <span className="terminal-cursor">▌</span>}
          </p>
        ))}

        {done && (
          <p className="terminal-line">
            <span className="terminal-prompt terminal-prompt--cmd">$</span>{" "}
            <span className="terminal-cursor terminal-cursor--blink">▌</span>
          </p>
        )}
      </div>
    </div>
  );
}
