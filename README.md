# Week 4 Flyrank Task, Accessible Components (Manual vs shadcn/ui)
 
A React + TypeScript + Vite project comparing two ways of building accessible UI components: hand built components (Modal, Tabs, Disclosure) versus the shadcn/ui library built on Radix primitives. The project documents what each approach gets right and where the manual implementation falls short, in `NOTES.md`.
 
## Tech Stack
 
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives (`@radix-ui/react-dialog`, `@radix-ui/react-tabs`)
- React Router DOM
- class-variance-authority, clsx, tailwind-merge (shadcn/ui style utilities)
## Project Structure
 
```
Week4_Flyrank_task/
├── public/            # Static assets
├── src/                # Application source (components, pages, styles)
├── index.html          # App entry HTML
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── NOTES.md            # Accessibility comparison notes (manual vs shadcn/ui)
└── LICENSE              # MIT
```
 
## Getting Started
 
Clone the repo and install dependencies.
 
```bash
git clone https://github.com/syedamehakzahra/Week4_Flyrank_task.git
cd Week4_Flyrank_task
npm install
```
 
### Available Scripts
 
| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite dev server |
| `npm run build` | Type checks with `tsc` and builds for production |
| `npm run preview` | Previews the production build locally |
 
## What This Task Covers
 
The task builds accessible Modal, Tabs, and Disclosure components from scratch (manual focus trapping, Escape key handling, ARIA roles, roving tabindex), then compares that implementation against shadcn/ui components built on Radix. Full findings, including gaps in focus management, keyboard interaction, and live region handling, are in [`NOTES.md`](./NOTES.md).
 
Key takeaways documented there:
- Radix primitives handle focus trap, Escape handling, and portal rendering out of the box, which the manual components have to build by hand and don't fully replicate (for example, no full roving tabindex in the manual Modal, no disabled tab skipping in the manual Tabs).
- Both approaches implement the same core ARIA roles (`role="dialog"`, `aria-modal`, `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`, `aria-expanded`), but Radix adds `data-state` for more reliable CSS hooks.
- TypeScript strictness (`verbatimModuleSyntax`) and Vite path aliases required consistent setup across `tsconfig.json` and `vite.config.ts`.
## License
 
MIT, see [LICENSE](./LICENSE) for details.
