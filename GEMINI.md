# GEMINI.md: Project Context for AI Agent

This document provides essential context about the "marketplace-food-delivery" project for the Gemini AI agent.

## 1. Project Overview

This is a **Next.js 16** web application for a single-store food delivery service called "Website Galih Food Delivery." The application serves as a digital storefront where customers can browse menus, add items to a shopping cart, and place orders.

- **Purpose**: To provide an online ordering platform for a personal food business.
- **Frontend**: Next.js 16, React 19 (with React Compiler), TypeScript, Tailwind CSS 4.
- **Backend**: **Supabase** is used for the database, authentication, and server-side logic. The project utilizes the `@supabase/ssr` and `@supabase/supabase-js` libraries for integration.
- **Architecture**: The project follows the Next.js App Router paradigm, with a clear separation of concerns. The file structure includes route groups (`(auth)`, `(main)`), a dedicated `components` directory, and `lib` helpers for Supabase interaction. A detailed planning document (`docs/planning.md`) outlines user flows, database schema, and feature requirements.

## 2. Building and Running

The project's key scripts are defined in `package.json`.

-   **Run the development server**:
    ```bash
    npm run dev
    ```

-   **Create a production build**:
    ```bash
    npm run build
    ```

-   **Start the production server**:
    ```bash
    npm run start
    ```

-   **Run the linter**:
    ```bash
    npm run lint
    ```

## 3. Development Conventions

-   **Styling**: Styling is done using **Tailwind CSS 4**. Utility classes are the primary method for styling components.
-   **State Management**: While not explicitly defined, the use of React 19 suggests modern React state management features. Given the app's nature, a combination of local state (`useState`, `useReducer`) and server state management via Supabase client calls is expected.
-   **Backend & Database**: All backend services (Auth, DB) are provided by **Supabase**.
    -   The proposed database schema is documented in `docs/planning.md`.
    -   Supabase client and server instances are configured in `src/lib/supabase/`.
-   **Authentication**: Handled by Supabase Auth. The application has separate routes for login and registration inside `src/app/(auth)`.
-   **Directory Structure**:
    -   `src/app`: Contains all pages and routes, organized with Next.js App Router features like route groups.
    -   `src/components`: Home to reusable React components, categorized into `ui`, `layout`, and `features`.
    -   `src/lib`: Contains utility functions and, most importantly, the Supabase client configuration.
    -   `docs/`: Contains project planning and design documentation. This is a key source of truth for project goals and architecture.

## 4. Key Documentation
-   `docs/planning.md`: Contains the comprehensive project plan, including the user flow diagram, user roles, feature list, proposed database schema, and development phases. Always refer to this document for understanding business logic and data structures.
