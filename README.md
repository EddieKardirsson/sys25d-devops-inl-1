# SalaryCalc – CI/CD with GitHub Actions

This project is part of **Assignment 1 – CI/CD** in the DevOps course at Medieinstitutet.

The goal of the assignment is not to build a complex application, but to demonstrate a complete **CI/CD pipeline** with automated testing, build, and deployment to a cloud platform.

---

## 🌐 Live Demo

👉 https://medieinstitutet.github.io/sys25d-devops-inl-1-EddieKardirsson/

---

## 🧩 Project Overview

SalaryCalc is a small web application built with **Vue 3** and **TypeScript** using **Vite**.  
The application performs a simple salary calculation and serves as a testable unit for demonstrating CI/CD workflows.

The application itself is intentionally simple — the focus of this project is on **DevOps practices**, not application complexity.

---

## 🛠 Tech Stack

- **Frontend:** Vite + Vue 3 + TypeScript
- **Build tool:** Vite
- **Package manager:** pnpm
- **Testing:** Vitest
- **Git hooks:** Husky
- **CI/CD:** GitHub Actions
- **Deployment:** GitHub Pages

---

## ✅ CI/CD Pipeline

The project implements a fully automated CI/CD pipeline using **GitHub Actions**.

### Pipeline steps:
1. **Install dependencies** using pnpm
2. **Run unit tests** automatically
3. **Build the application**
4. **Deploy to GitHub Pages**

The pipeline is triggered automatically on:
- Pushes to the `main` branch
- Pull Requests targeting `main`

---

## 💻 Local Setup

This repository uses a **root-level Husky setup** and the actual application lives in the `salarycalc/` subfolder.

### Install dependencies

From the repository root:

```bash
pnpm install
cd salarycalc
pnpm install
```

- The first `pnpm install` installs **Husky** and sets up Git hooks
- The second `pnpm install` installs the app dependencies for **SalaryCalc**

---

## ▶️ Run the Application Locally

From the `salarycalc/` folder:

```bash
pnpm dev
```

Then open the local Vite URL shown in the terminal.

---

## 🧪 Testing Strategy

- Unit tests are written with **Vitest**
- Tests are run:
  - Locally via `pnpm test`
  - Automatically in CI before deployment
- Commits are blocked locally if tests fail via a **Husky pre-commit hook**

To run tests manually:

```bash
cd salarycalc 
pnpm test
```
If you're already in the `salarycalc/` folder, you can skip the `cd salarycalc` step and just run `pnpm test` there.

---

## 🔒 Quality Gates

### Pre-commit Hooks
A local pre-commit hook ensures that:
- Unit tests must pass before a commit is allowed

This prevents failing code from reaching the CI pipeline.

The hook is managed with **Husky** and is installed when dependencies are installed in the repository root.

---

## 🔀 Git Workflow

The project follows a structured Git workflow:

- **Conventional Commits** are used for clear and consistent commit history
- **Pull Request Template** enforces structured PR descriptions
- **Magic Keywords** (e.g. `fixes #4`) are used to automatically close issues on merge

---

## 🚀 Releases

The project uses **GitHub Releases** to mark stable versions.

- `v1.0.0` represents the first stable, fully deployed version
- Releases summarize features, CI/CD setup, and provide a link to the live deployment

---

## 📁 Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yaml
├── .husky/
│   └── pre-commit
├── salarycalc/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── vite.config.ts
├── package.json
├── pnpm-lock.yaml
└── README.md
```
