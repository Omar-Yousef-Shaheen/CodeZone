# Omar Yousef Mustafa Portfolio

A fully static portfolio website built with React, Vite, TypeScript, and Tailwind CSS. The content is based only on `CV-Omar-Yousef.pdf` and is designed for deployment to normal static hosting.

The UI uses Manrope, a premium white-and-blue CodezWeb visual system, `react-icons` and `lucide-react` for icons, and Embla Carousel for the Projects and Testimonials sliders.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

The production-ready static output is generated in `dist/`. Upload the contents of `dist/` to your static host.

## Deployment

### GitHub Pages

1. Push the project to a GitHub repository.
2. Run `npm run build`.
3. Deploy the `dist/` folder with a Pages action, or use a tool such as `gh-pages`.
4. If deploying under a repository subpath, set Vite's `base` option in `vite.config.ts`.

### Netlify

1. Create a new site from your repository.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.

### Vercel

1. Import the repository in Vercel.
2. Use the Vite framework preset.
3. Keep the build command as `npm run build` and output directory as `dist`.

## Update Content

- Profile and contact details: `src/data/profile.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
- Projects: `src/data/projects.ts`
- Process steps: `src/data/process.ts`
- Services: `src/data/services.ts`
- Testimonials: `src/data/testimonials.ts`

## Add A New Project

Edit `src/data/projects.ts` and add another object with:

- `title`
- `description`
- `technologies`
- `image`
- `liveDemoUrl`
- `sourceCodeUrl`
- `category`
- `featured`

Use real links only. Leave fields empty if a live demo or source code URL is not available.

## Add A New Testimonial

Edit `src/data/testimonials.ts` and add a new object with:

- `name`
- `role`
- `quote`
- `placeholder`

Use real client names and review text only after permission is available. Keep `placeholder: true` for TODO cards.

## Change The Color Palette

Edit color tokens in `tailwind.config.js`, then adjust any matching custom styles in `src/styles/index.css`.

## Change Icons Or Images

The hero image is stored at `src/assets/images/hero-workspace.png`. Replace it with a new local image and keep the import in `src/components/Hero.tsx` updated if the filename changes.

Icons are centralized in `src/components/Icon.tsx`. Data files store simple icon keys, and components map those keys to real icons from `react-icons` or `lucide-react`.

## Replace Or Update The CV

The downloadable CV is stored at `public/CV-Omar-Yousef.pdf`. Replace that file with the new PDF. If you rename it, update `cvPath` in `src/data/profile.ts`.

## Static Form Note

The contact form is visual only and does not submit anywhere. To make it functional while keeping static hosting, connect it later with Formspree, Netlify Forms, EmailJS, or another static-friendly service.
