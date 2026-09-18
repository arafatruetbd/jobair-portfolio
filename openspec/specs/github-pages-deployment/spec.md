# github-pages-deployment Specification

## Purpose

Defines automated build and deployment capabilities for publishing the static Jobair portfolio website to GitHub Pages via GitHub Actions with subpath asset routing and build gating.

## Requirements

### Requirement: Automated CI/CD Workflow Triggers
The deployment pipeline SHALL trigger automatically upon push events targeting the `main` branch and MUST support manual triggering via `workflow_dispatch`. The pipeline MUST NOT trigger deployment on pull requests or pushes to feature branches.

#### Scenario: Code push to main triggers workflow
- **WHEN** commits are pushed or merged into the `main` branch
- **THEN** GitHub Actions automatically starts the portfolio deployment workflow run

#### Scenario: Manual dispatch triggers workflow
- **WHEN** an authorized user triggers the deployment workflow manually from the repository Actions tab
- **THEN** GitHub Actions executes the full deployment workflow run

### Requirement: Build-Gated Deployment Pipeline
The deployment pipeline MUST gate deployment strictly behind successful dependency installation, linting, type-checking, and Vite production building. The deployment job MUST only execute if the build job completes successfully with exit code 0.

#### Scenario: Successful build advances to deployment
- **WHEN** dependency installation, linting, and production build finish without error
- **THEN** the static build output from `dist/` is uploaded as a Pages artifact and deployed to the GitHub Pages environment

#### Scenario: Build failure halts deployment
- **WHEN** any linting, type-checking, or build step encounters a non-zero exit code or compilation error
- **THEN** the workflow terminates with failure and no deployment to GitHub Pages is executed

### Requirement: Execution Permissions and Concurrency Management
The deployment workflow SHALL enforce least-privilege permissions (`contents: read`, `pages: write`, and `id-token: write`) and SHALL manage concurrency within a single `pages` group with `cancel-in-progress: true` to prevent race conditions during rapid consecutive deployments.

#### Scenario: Concurrent push cancels stale run
- **WHEN** a new commit is pushed to `main` while an earlier deployment run is active
- **THEN** the in-progress run is cancelled and only the latest commit build is deployed to GitHub Pages

### Requirement: Subpath Asset Resolution
The static build configuration MUST resolve all asset links, JavaScript bundles, stylesheets, and public media files under the repository subpath `/jobair-portfolio/` so that the site renders fully without 404 errors when served from GitHub Pages.

#### Scenario: Static assets load under repository subpath
- **WHEN** the deployed portfolio is visited at `https://<owner>.github.io/jobair-portfolio/`
- **THEN** all bundled scripts, stylesheets, and static image assets resolve with HTTP 200 status codes under the `/jobair-portfolio/` base URL

### Requirement: Deployment Documentation
The repository MUST include clear deployment documentation in `README.md` specifying repository configuration requirements, GitHub Pages source selection (`GitHub Actions`), local verification commands (`npm run build`, `npm run preview`), and CI/CD workflow behavior.

#### Scenario: Contributor reads deployment instructions
- **WHEN** a developer inspects `README.md` to understand the deployment process
- **THEN** the documentation clearly guides them through GitHub Pages repository settings, local build verification, and deployment execution
