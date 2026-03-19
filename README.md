# Resume

A personal resume and cover letter web application built with Angular.

*But... why an Angular web app and not just a word doc?*
1. Microsoft Word was really annoying to work with for the formatting I wanted
2. I like source control and wanted to keep my resume in git
3. I like Angular, even though it's very overkill for this use case 😊

## Features

- **Resume** — Displays a formatted resume with personal info, technical skills, and work experience
- **Cover Letter** — Renders a cover letter populated via environment configuration, with an auto-formatted date
- Environment-based configuration (contact info, cover letter text) to keep personal data out of source

## Tech Stack

- [Angular 21](https://angular.dev) — standalone components, signals, `OnPush` change detection
- [TypeScript](https://www.typescriptlang.org)
- [SCSS](https://sass-lang.com)
- [Feather Icons](https://feathericons.com)

## Getting Started

### Prerequisites

- Node.js
- npm 11+

### Install dependencies

```bash
npm install
```

### Configure environment

`src/environments/environment.development.ts` is gitignored and must be created locally. Copy the production environment file as a starting point:

```bash
cp src/environments/environment.ts src/environments/environment.development.ts
```

Then fill in your personal details:

```ts
export const environment = {
  fullName: 'Your Name',
  email: 'you@example.com',
  phone: '555-555-5555',
  location: 'City, ST',
  linkedin: 'https://linkedin.com/in/yourprofile',
  jobTitle: 'Your Job Title',
  coverLetter: `Dear Hiring Manager, ...`,
};
```

The production environment file ([`src/environments/environment.ts`](src/environments/environment.ts)) contains placeholder values and is used for production builds.

### Run locally

```bash
npm start
```

Navigate to `http://localhost:4200`. The app will auto-reload on file changes.

## Routes

| Path            | Description       |
| --------------- | ----------------- |
| `/resume`       | Resume page       |
| `/cover-letter` | Cover letter page |

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm start`     | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run watch` | Build in watch mode (development) |
