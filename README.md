# Simple Web App - Nuxt 3

## Description

Nuxt 3 simple application that contain login page, user list page and user detail page. Using sidebase/nuxt-auth for authentification and tailwindcss as the css framework.

VhiWEB Frontend Developer Test Case

### Development Setup

- Install dependencies

```bash
$ pnpm install
```

- Run local development server in background

```bash
$ pnpm dev
```

- Visit `localhost:3000/` on a browser

- To get the user credentials, please visit https://reqres.in/ and see LOGIN - SUCCESSFUL request documentation 

### Dependencies

- Reqres (https://reqres.in/): Public API to provide the login and user data.



### Folder Structure

#### Assets

- **`assets/css`**: CSS and SCSS stylesheets.

#### Componets

- **`components/`**: Vue components used in the application.

    - **`components/ui`**: Component that can be reusable.

#### Layout

- **`layouts/`**: Layouts framework to extract common UI patterns that can be reusable.

#### Pages

- **`pages/`**: File-based routing to create routes within  application.

#### Public

- **`public/`**: This folder contain website's static assets.

    - **`public/icons`**: SVGs files used in application.

#### Server

- **`server/`**: API and server handlers used in application.

#### Stores

- **`stores/`**: Vuex Store files to store and manage states that used globally in application.

#### Utils

- **`utils/`**: Utility functions and helper files.