# Nexora Digital

A responsive, multi-page digital agency website built for the InfioneX Frontend Development Internship 2026 — Problem Statement 01. Nexora Digital is a fictional independent studio; its company details and portfolio are illustrative.

## Overview

The project demonstrates a polished agency website with shared navigation and page components, responsive layouts, accessible interactions, motion preferences, a filterable portfolio, FAQ accordion, and validated frontend-only contact and career forms.

## Features

- Six complete pages: Home, About, Services, Contact, Work, and Careers, plus a custom 404 page.
- Responsive mobile navigation, cards, project filters, FAQ accordion, and form validation.
- Accessible labels, keyboard focus styles, reduced-motion support, semantic landmarks, and descriptive image alt text.
- Frontend-only forms clearly disclose that submissions are not sent or stored.
- Page-specific document titles, meta description, favicon, and lazy-loaded project/team images.

## Technology

React 19, Vite 7, Tailwind CSS 4, React Router 7, Lucide React, Framer Motion, and React Hook Form.

## Design preview

The [low-fidelity wireframes](docs/wireframes.svg) show the desktop home page, mobile home page, and contact page hierarchy. Add production screenshots of Home, Work, and Contact in `docs/screenshots/` before final submission.

See [PROJECT_PLAN.md](docs/PROJECT_PLAN.md) for requirement analysis, assumptions, module breakdown, and verification status.

## Project structure

```text
public/                 Static favicon
src/
  components/           Shared navigation, cards, forms, CTA, and page elements
  data/                 Services, projects, testimonials
  pages/                Home, About, Services, Contact, Portfolio, Careers, 404
  App.jsx               Routes and page title handling
  index.css             Global styles and responsive layouts
  main.jsx              React entry point
```

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Vite prints the local development URL. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deployment

Import the repository into Vercel. Use the Vite preset, `npm run build` as the build command, and `dist` as the output directory. Vercel's SPA fallback supports the client-side routes. The forms need a backend or form service before they can deliver messages.

## Verification

`npm run build` produces the deployable bundle. Route smoke checks have been run against the six pages and a missing route. Lighthouse scores and manual browser checks are not yet recorded; see the verification checklist in [PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

## Future improvements

- Connect forms to a secure serverless endpoint and add spam protection.
- Replace illustrative Unsplash photography with licensed project imagery.
- Add individual case-study pages, analytics consent, and automated accessibility checks.
