## Why

The Jobair portfolio website requires an automated, reliable, and zero-maintenance static hosting pipeline to showcase Jobair's professional capabilities to prospective clients and recruiters. Per PRD.md and architecture.md (Sections 21–24), deploying as a static Single Page Application (SPA) on GitHub Pages using GitHub Actions ensures continuous delivery from the `main` branch, guaranteed build verification prior to release, and seamless asset resolution under the repository subpath without backend overhead.

## What Changes

- **GitHub Actions Deployment Workflow**: Create `.github/workflows/deploy.yml` defining an automated build-and-deploy pipeline using official GitHub Actions (`actions/checkout@v4`, `actions/setup-node@v4`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`).
- **Gated Deployment on Main**: Configure deployment triggers exclusively on pushes to the `main` branch (plus manual `workflow_dispatch`), enforcing that deployment executes only after dependency installation (`npm ci`), type-checking, linting, and Vite production build (`npm run build`) succeed without errors.
- **Concurrency & Permissions**: Configure least-privilege permissions (`contents: read`, `pages: write`, `id-token: write`) and concurrency groups (`pages` with `cancel-in-progress: true`) to prevent race conditions during concurrent runs.
- **Repository Subpath & Asset Resolution**: Verify and enforce that Vite's base path (`/jobair-portfolio/`) is properly configured in `vite.config.ts` so that all bundled scripts, stylesheets, SVG assets, and public images resolve reliably under `https://<username>.github.io/jobair-portfolio/`.
- **Deployment Documentation**: Update `README.md` to document the deployment architecture, required GitHub repository Settings for Pages (Source: GitHub Actions), local verification commands (`npm run build`, `npm run preview`), and CI/CD workflow behavior.
- **Non-Goals**:
  - Custom domain configuration (e.g. CNAME records, apex domain DNS) is outside the MVP scope.
  - Server-side rendering (SSR), serverless functions, database connections, or backend services are excluded.
  - Deployments from feature branches or pull requests are not supported; builds can run in validation but only `main` deploys to production.

## Capabilities

### New Capabilities

- `github-pages-deployment`: Automated build and deployment pipeline to GitHub Pages via GitHub Actions, enforcing strict build gating, subpath asset resolution, and operational deployment documentation.

### Modified Capabilities

*(None)*

## Impact

- **Affected Code & Configuration**:
  - `.github/workflows/deploy.yml` (new workflow file)
  - `vite.config.ts` (validated base path configuration)
  - `README.md` (project documentation updated with deployment instructions)
- **APIs & Dependencies**:
  - No new npm packages required; uses existing `npm` scripts and standard GitHub-maintained actions.
- **Systems & Operations**:
  - GitHub Actions runners (`ubuntu-latest` with Node.js 20).
  - GitHub Pages environment deployment target.
