/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Preflight stays off for now: the existing index.css keeps its own reset
  // (`* { margin:0; padding:0; box-sizing:border-box }`) and Bootstrap's Reboot
  // is being removed. The visual redesign wave can turn Preflight back on.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // Single source of truth stays in index.css :root — these just expose
      // the existing CSS variables to Tailwind utilities (bg-primary, text-accent...).
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        accent: "var(--accent)",
        "accent-bg": "var(--accentbackground)",
        error: "var(--error)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      // Matches the existing index.css media queries and Bootstrap's `lg` (992px),
      // so the migrated Navbar collapses at the same width as before.
      screens: {
        lg: "992px",
      },
    },
  },
  plugins: [],
};
