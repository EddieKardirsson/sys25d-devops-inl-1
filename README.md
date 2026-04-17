[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/N2U_vT6F)

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

## 🧪 Testing Strategy

- Unit tests are written with **Vitest**
- Tests are run:
    - Locally via `pnpm test`
    - Automatically in CI before deployment
- Commits are blocked locally if tests fail (pre-commit hook)

---

## 🔒 Quality Gates

### Pre-commit Hooks
A local pre-commit hook ensures that:
- Unit tests must pass before a commit is allowed

This prevents failing code from reaching the CI pipeline.

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
├── salarycalc/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── vite.config.ts
└── README.md
```
