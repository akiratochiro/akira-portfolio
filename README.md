# Akira Tochiro — Portfolio

Personal portfolio built with React and Tailwind CSS, showcasing projects, skills and a working contact form.

## Features

- Bilingual content (EN/PT) with a single toggle in the navbar
- Responsive layout, scroll animations via [AOS](https://michalsnik.github.io/aos/)
- Project cards with live demo / GitHub links and tech tags
- Contact form wired to [Formspree](https://formspree.io/), with client-side validation, honeypot anti-spam and accessible labels/feedback

## Tech Stack

React · Tailwind CSS · AOS · react-icons · Create React App

## Getting Started

```bash
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command         | Description                              |
| ---------------- | ----------------------------------------- |
| `npm start`      | Runs the app in development mode          |
| `npm test`       | Runs the test suite                       |
| `npm run build`  | Builds the app for production to `build/` |

## Project Structure

```
src/
├── components/     # Navbar, Header, About, Projects, ProjectCard, Contact
├── translations/    # EN/PT content dictionary + t() helper
├── images/          # Optimized WebP assets
├── styles/          # Global CSS (Tailwind + custom rules)
└── App.js
```

## Contact

- Email: akira.tochiro23@gmail.com
- LinkedIn: [linkedin.com/in/leandro-akira-tochiro-661a52164](https://www.linkedin.com/in/leandro-akira-tochiro-661a52164/)
- GitHub: [github.com/akiratochiro](https://github.com/akiratochiro)
