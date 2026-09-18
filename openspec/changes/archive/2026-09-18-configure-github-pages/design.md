## Context

The Jobair portfolio is a static Single Page Application (SPA) built with React 19, TypeScript, Vite 8, and Tailwind CSS v4. The repository is configured with standard build scripts (`npm run build` running `tsc -b && vite build` and `npm run lint` running `eslint .`). The architecture defined in `docs/architecture.md` (Sections 21–24) mandates static deployment to GitHub Pages via GitHub Actions with zero backend services, automated delivery on push to `main`, and reliable subpath routing.

Currently, the project contains no `.github/workflows` directory, requiring the introduction of the CI/CD pipeline, validation of the Vite subpath configuration, and clear setup documentation.

## Goals / Non-Goals

**Goals:**
- Implement a two-job GitHub Actions workflow (`build` and `deploy`) in `.github/workflows/deploy.yml` following the exact architecture specified in `docs/architecture.md`.
- Enforce strict build gating: linting, TypeScript compilation, and Vite bundling must succeed before deployment executes.
- Ensure subpath asset resolution under `/jobair-portfolio/` so that bundles, SVG icons, and images load without 404 errors on GitHub Pages.
- Provide comprehensive deployment documentation in `README.md` for repository administrators and contributors.

**Non-Goals:**
- Configuring custom apex domains or DNS CNAME records (reserved for post-MVP).
- Deploying preview instances from pull requests or non-main branches.
- Introducing backend servers, API endpoints, or SSR infrastructure.

## Decisions

### 1. Native GitHub Pages Deployment via Artifacts (vs. `gh-pages` Branch)
- **Decision**: Use GitHub's official Pages deployment actions (`actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`) deploying directly from the `dist/` directory.
- **Rationale**: Following `docs/architecture.md` Section 22, native artifact-based deployment avoids creating orphan `gh-pages` branches, keeps git commit history clean, and leverages native GitHub Pages environment deployment tracking with zero third-party deployment tools.
- **Alternatives Considered**: Using npm packages like `gh-pages` or custom scripts pushing to a `gh-pages` branch. Rejected due to branch pollution, token permission complexity, and deviation from the established architecture.

### 2. Two-Job Pipeline Architecture with Build Gating
- **Decision**: Divide the workflow into a `build` job (running on `ubuntu-latest` with Node 20 and caching npm dependencies) and a separate `deploy` job that explicitly depends on `build` via `needs: build`.
- **Rationale**: Strict separation guarantees that static build artifacts are generated and validated (via `npm ci`, `npm run lint`, and `npm run build`) before the deployment environment is invoked. If linting or building fails, the deploy job is automatically skipped.
- **Alternatives Considered**: Combining build and deploy into a single job. Rejected because GitHub Pages environments, deployment URLs, and deployment statuses are cleanly associated with a dedicated deployment job.

### 3. Vite Base Path Configured for Repository Subpath
- **Decision**: Maintain `base: '/jobair-portfolio/'` in `vite.config.ts`.
- **Rationale**: GitHub Pages project sites are served at `https://<owner>.github.io/<repo-name>/`. Setting `base: '/jobair-portfolio/'` ensures that Vite automatically prefixes all emitted script, style, and asset references in `index.html` with the repository subpath.
- **Alternatives Considered**: Relative paths (`base: './'`). Rejected because relative paths can break deep sub-routes or anchor navigation under specific browser and server routing behaviors.

### 4. Concurrency and Least-Privilege Permissions
- **Decision**: Restrict workflow permissions to `contents: read`, `pages: write`, and `id-token: write`. Set concurrency to `group: pages` with `cancel-in-progress: true`.
- **Rationale**: Least-privilege prevents unauthorized repository mutations. Concurrency grouping prevents deployment collisions when multiple commits are pushed in rapid succession, saving runner minutes and ensuring only the latest release goes live.

## Risks / Trade-offs

- **[Risk] GitHub Pages Source misconfigured in repository settings** → **Mitigation**: GitHub repositories default to deploying from a branch unless changed. Document clearly in `README.md` that the repository administrator must configure `Settings > Pages > Build and deployment > Source` to `GitHub Actions`.
- **[Risk] Path broken in local development or preview** → **Mitigation**: Vite handles `base` consistently in both `npm run dev` and `npm run preview`. Document the preview command (`npm run preview`) in `README.md` to verify subpath loading locally.
- **[Risk] CI build latency due to clean installs** → **Mitigation**: Configure `actions/setup-node@v4` with `cache: 'npm'` to cache dependencies across workflow runs.

## Migration Plan

1. Create `.github/workflows/deploy.yml` with the architecture-compliant workflow definition.
2. Verify that `vite.config.ts` has `base: '/jobair-portfolio/'` configured and verify local production build output (`npm run build`).
3. Update `README.md` with complete deployment instructions, prerequisites, repository settings, and verification commands.
4. Verify all changes through linting and local preview.
