# Jobair Hossain — Professional Portfolio Website

A fast, responsive, accessible, and static-first portfolio website showcasing Jobair Hossain's expertise as an **Acumatica ERP & Ticket Operations Specialist**.

Live URL: `https://<github-username>.github.io/jobair-portfolio/`

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting & CI/CD**: [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions)

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- `npm` (v10 or higher)

### Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/jobair-portfolio.git
   cd jobair-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Run code quality and linting checks:
   ```bash
   npm run lint
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## GitHub Pages Deployment

The website is hosted on **GitHub Pages** with continuous deployment automated via **GitHub Actions** (`.github/workflows/deploy.yml`).

### Deployment Architecture

- **Trigger**: Automatic on every push to the `main` branch, or manually triggered via `workflow_dispatch` in the Actions tab.
- **Build Gating**: The workflow executes dependency installation (`npm ci`), code linting (`npm run lint`), and production compilation (`npm run build`). Static site deployment runs **only after** all lint and build steps succeed without errors.
- **Artifact Hosting**: The compiled static assets from `./dist` are packaged with `actions/upload-pages-artifact@v3` and deployed directly to GitHub Pages using `actions/deploy-pages@v4`.
- **Subpath Handling**: The Vite configuration (`vite.config.ts`) specifies `base: '/jobair-portfolio/'`, ensuring that all asset URLs, scripts, styles, and public resources correctly resolve under the repository subpath.
- **Concurrency & Permissions**: Concurrency is managed with `group: pages` and `cancel-in-progress: true` to prevent race conditions during rapid commits. The workflow operates under least-privilege permissions (`contents: read`, `pages: write`, `id-token: write`).
- **No Backend**: The entire site is fully static with zero backend dependencies or server-side requirements.

### Step-by-Step Repository Configuration

To enable automated GitHub Pages deployment for this repository:

1. **Repository Settings**:
   - On GitHub, navigate to your repository.
   - Go to **Settings** > **Pages** (in the left sidebar under "Code and automation").
2. **Configure Build and Deployment Source**:
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (do NOT select "Deploy from a branch").
3. **Deploy from Main**:
   - Push your changes or merge a pull request into the `main` branch:
     ```bash
     git push origin main
     ```
   - GitHub Actions will automatically initiate the **Deploy Portfolio** workflow.
4. **Monitor Workflow**:
   - Track progress under the **Actions** tab in your repository.
   - Once completed, the deployment URL will be reported in the action summary and the repository Environments section.

---

## Documentation References

- Product requirements: [`docs/PRD.md`](docs/PRD.md)
- Technical architecture: [`docs/architecture.md`](docs/architecture.md)
