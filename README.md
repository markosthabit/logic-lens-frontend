# 🧠 Logic Lens Frontend

> **Part of the Logic Lens project** - An AI-powered logical fallacy detector

<!-- [![Logic Lens Logo]() -->
<div align="center">
<a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text"_blank"><img src="https://img.shields.io/badge/License-GPLv3-teal" alt="Package License" /></a>
  <a href="https://paypal.me/markosthabit" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

</div>

<div align="center">
  <img src="https://img.shields.io/badge/react-18.2.0-blue" alt="React">
  <img src="https://img.shields.io/badge/typescript-5.0.0-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/tailwindcss-4.0.0--next-38bdf8" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/daisyui-4.0.0--next-ff69b4" alt="DaisyUI">
</div>

**Logic Lens Frontend** is the user interface component of the Logic Lens project. It provides an intuitive interface for detecting logical fallacies in arguments using AI technology. This repository contains the React-based frontend application that communicates with the [Logic Lens Backend API](https://github.com/markosthabit/logic-lens-backend).

## ✨ Features

- Modern, responsive UI built with React and TypeScript
- Clean, accessible design with Tailwind CSS v4 and DaisyUI
- Interactive fallacy analysis with real-time feedback
- Example fallacy library for educational purposes
- Loading states and error handling
- Mobile-friendly layout

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Logic Lens Backend running (see [backend repository](https://github.com/yourusername/logic-lens-backend))

### Installation

```bash
# Clone repository
git clone https://github.com/markosthabit/logic-lens-frontend.git
cd logic-lens-frontend

# Install dependencies
npm install

# Start development server
npm run dev
Configuration
Create a .env file in the project root:

.env
VITE_API_URL=http://localhost:3000
```

## 🧩 Project Structure

```text
src/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── services/        # API communication layer
├── types/           # TypeScript type definitions
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🔌 Connecting to Backend

The frontend expects the backend to be running at <http://localhost:3000> by default. To change this:

Update .env file:

```bash
.env
VITE_API_URL=http://backend-url:port
```

Restart the development server

## 🛠️ Future Work

### Technical Enhancements

- Monorepo Structure: Consolidate frontend and backend using Turborepo.

### UI/UX Improvements

- Enhance component spacing and visual hierarchy
- Implement dark/light theme toggle
- Add animations for state transitions
- Improve mobile responsiveness
- Add tutorial/onboarding flow
- Use Toasts or custom alerts for error messages

### Functional Enhancements

- Support for multiple fallacies in a single analysis
- User accounts to save analysis history
- Browser extension for real-time fallacy detection


## 🤝 Contributing
We welcome contributions! Please see our contribution guidelines for details.

## 📄 License
This project is licensed under the GNU GPLv3 License - see the [`LICENSE`](./LICENSE.md) file for details.

---

**Part of the Logic Lens Project***
- Frontend Repository: github.com/markosthabit/logic-lens-frontend
- Backend Repository: github.com/markosthabit/logic-lens-backend
