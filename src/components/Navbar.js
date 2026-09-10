import { useState } from "react";
import { content, t } from "../translations/content";

export default function NavBar({ language, setLanguage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="custom-navbar fixed inset-x-0 top-0 z-[1030] flex flex-wrap items-center justify-between">
      <a
        href="#home"
        className="navbar-brand-custom mr-4 whitespace-nowrap py-[0.3125rem] no-underline"
      >
        akira
      </a>

      <button
        type="button"
        className="cursor-pointer appearance-none border-0 bg-transparent px-3 py-1 leading-none lg:hidden"
        aria-label="Toggle navigation"
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke="rgba(33, 37, 41, 0.75)"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </button>

      <div
        id="primary-navigation"
        className={`${
          open ? "flex" : "hidden"
        } w-full basis-full flex-col items-center lg:flex lg:w-auto lg:basis-auto lg:flex-row lg:ml-auto`}
      >
        <a href="#home" className="nav-link py-2 no-underline">
          Home
        </a>

        <a href="#about" className="nav-link py-2 no-underline">
          {t(content.about.header, language)}
        </a>

        <a href="#projects" className="nav-link py-2 no-underline">
          {t(content.projects.title, language)}
        </a>

        <a href="#contact" className="nav-link py-2 no-underline">
          {t(content.contact.header, language)}
        </a>

        <button
          className="language-toggle-navbar"
          onClick={() => setLanguage(language === "en" ? "pt" : "en")}
        >
          {language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
        </button>
      </div>
    </nav>
  );
}
