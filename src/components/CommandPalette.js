import { useEffect, useMemo, useRef, useState } from "react";
import { t } from "../translations/content";

const LABELS = {
  home: { en: "Go to Home", pt: "Ir para Início" },
  about: { en: "Go to About", pt: "Ir para Sobre" },
  projects: { en: "Go to Projects", pt: "Ir para Projetos" },
  contact: { en: "Go to Contact", pt: "Ir para Contato" },
  languageToPt: { en: "Switch language to Português", pt: "Mudar idioma para Português" },
  languageToEn: { en: "Switch language to English", pt: "Mudar idioma para Inglês" },
  email: { en: "Copy email address", pt: "Copiar endereço de email" },
  github: { en: "Open GitHub profile", pt: "Abrir perfil no GitHub" },
  linkedin: { en: "Open LinkedIn profile", pt: "Abrir perfil no LinkedIn" },
  placeholder: { en: "Type a command…", pt: "Digite um comando…" },
  empty: { en: "No commands found", pt: "Nenhum comando encontrado" },
  hint: { en: "↑↓ navigate · ↵ select · esc close", pt: "↑↓ navegar · ↵ selecionar · esc fechar" },
};

function scrollToSection(id) {
  return () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CommandPalette({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);

  const commands = useMemo(
    () => [
      { id: "home", label: t(LABELS.home, language), run: scrollToSection("home") },
      { id: "about", label: t(LABELS.about, language), run: scrollToSection("about") },
      { id: "projects", label: t(LABELS.projects, language), run: scrollToSection("projects") },
      { id: "contact", label: t(LABELS.contact, language), run: scrollToSection("contact") },
      {
        id: "language",
        label: t(language === "en" ? LABELS.languageToPt : LABELS.languageToEn, language),
        run: () => setLanguage(language === "en" ? "pt" : "en"),
      },
      {
        id: "email",
        label: t(LABELS.email, language),
        run: () => navigator.clipboard?.writeText("akira.tochiro23@gmail.com"),
      },
      {
        id: "github",
        label: t(LABELS.github, language),
        run: () =>
          window.open("https://github.com/akiratochiro", "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: t(LABELS.linkedin, language),
        run: () =>
          window.open(
            "https://www.linkedin.com/in/leandro-akira-tochiro-661a52164/",
            "_blank",
            "noopener,noreferrer"
          ),
      },
    ],
    [language, setLanguage]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((cmd) => cmd.label.toLowerCase().includes(q));
  }, [commands, query]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    triggerRef.current?.focus?.();
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (!open && e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const activeTag = document.activeElement?.tagName;
        const isEditable =
          activeTag === "INPUT" ||
          activeTag === "TEXTAREA" ||
          document.activeElement?.isContentEditable;
        if (isEditable) return;
        e.preventDefault();
        triggerRef.current = document.activeElement;
        setOpen(true);
        return;
      }
      if (open && e.key === "Escape") {
        e.preventDefault();
        close();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const handleInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[activeIndex];
      if (cmd) {
        cmd.run();
        close();
      }
    }
  };

  return (
    <div className="cmdk-backdrop" onMouseDown={close}>
      <div
        className="cmdk-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="text"
          className="cmdk-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder={t(LABELS.placeholder, language)}
          aria-label={t(LABELS.placeholder, language)}
          autoComplete="off"
        />

        <ul className="cmdk-list" role="listbox">
          {filtered.length === 0 && <li className="cmdk-empty">{t(LABELS.empty, language)}</li>}

          {filtered.map((cmd, i) => (
            <li
              key={cmd.id}
              role="option"
              aria-selected={i === activeIndex}
              className={`cmdk-item ${i === activeIndex ? "cmdk-item--active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => {
                cmd.run();
                close();
              }}
            >
              <span className="cmdk-prompt">$</span> {cmd.label}
            </li>
          ))}
        </ul>

        <div className="cmdk-hint">{t(LABELS.hint, language)}</div>
      </div>
    </div>
  );
}
