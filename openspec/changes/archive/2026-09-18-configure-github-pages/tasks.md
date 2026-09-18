## 1. GitHub Actions CI/CD Pipeline

- [x] 1.1 Create `.github/workflows/deploy.yml` implementing the two-job GitHub Pages deployment pipeline (`build` and `deploy`) per `docs/architecture.md` Section 22 with Node 20, npm caching, dependency installation via `npm ci`, linting via `npm run lint`, building via `npm run build`, and artifact upload with `actions/upload-pages-artifact@v3`. Verify the workflow YAML structure.
- [x] 1.2 Configure workflow triggers for `push` to `main` and manual `workflow_dispatch`, permissions (`contents: read`, `pages: write`, `id-token: write`), and concurrency (`group: pages`, `cancel-in-progress: true`) in `.github/workflows/deploy.yml`. Verify that `deploy` explicitly depends on `build` via `needs: build`.

## 2. Vite Base Path and Static Asset Integrity

- [x] 2.1 Validate and enforce `base: '/jobair-portfolio/'` in `vite.config.ts` to ensure compatibility with GitHub Pages repository subpath hosting. Verify that local development and production build configurations preserve the base path.
- [x] 2.2 Verify that static assets, icons (`favicon.svg`, `icons.svg`), and images (`images/profile/profile.png`) referenced in `index.html` and throughout React components resolve correctly under the `/jobair-portfolio/` subpath.

## 3. Documentation and Build Verification

- [x] 3.1 Update `README.md` to document the deployment architecture, required GitHub repository configuration (`Settings > Pages > Build and deployment > Source: GitHub Actions`), local verification commands (`npm run build`, `npm run preview`), and push-to-deploy workflow.
- [x] 3.2 Execute `npm run lint` and `npm run build` locally to verify zero TypeScript errors, clean ESLint validation, and inspect `dist/index.html` to verify generated script and CSS bundle links include the `/jobair-portfolio/` prefix.
