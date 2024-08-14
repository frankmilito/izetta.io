## IZETTA Assessment
#### To assess this kindly click on the login when you deploy the app. This should route you to `/dashboard/company` where the component lives
<img width="1671" alt="Screenshot 2024-08-14 at 17 18 35" src="https://github.com/user-attachments/assets/29f4c4c9-bdc5-4619-8782-d9b54231d71f">


<div align="center"><strong>Next.js 14 Admin Dashboard Starter Template With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js App Router</div>
<br />
<div align="center">
<a href="https://next-shadcn-dashboard-starter.vercel.app">View Demo</a>
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Auth - [Auth.js](https://authjs.dev/)
- File Uploading - [Uploadthing](https://uploadthing.com)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

_If you are looking for a React admin dashboard starter, here is the [repo](https://github.com/Kiranism/react-shadcn-dashboard-starter)._

## Pages

| Pages                                                                             | Specifications                                                                                        |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| [Signup](https://next-shadcn-dashboard-starter.vercel.app/)                       | Authentication with **NextAuth** supports Social logins and email logins(Enter dummy email for demo). |
| [Dashboard](https://next-shadcn-dashboard-starter.vercel.app/dashboard)           | Cards with recharts graphs for analytics.                                                             |
| [Users](https://next-shadcn-dashboard-starter.vercel.app/dashboard/user)          | Tanstack tables with user details client side searching, pagination etc                               |
| [Users/new](https://next-shadcn-dashboard-starter.vercel.app/dashboard/user/new)  | A User Form with Uploadthing to support file uploading with dropzone.                                 |
| [Employee](https://next-shadcn-dashboard-starter.vercel.app/dashboard/employee)   | Tanstack tables with server side searching, pagination etc).                                          |
| [Profile](https://next-shadcn-dashboard-starter.vercel.app/dashboard/profile)     | Mutistep dynamic forms using react-hook-form and zod for form validation.                             |
| [Kanban Board](https://next-shadcn-dashboard-starter.vercel.app/dashboard/kanban) | A Drag n Drop task management board with dnd-kit and zustand to persist state locally.                |
| [Not Found](https://next-shadcn-dashboard-starter.vercel.app/dashboard/notfound)  | Not Found Page Added in the root level                                                                |
| -                                                                                 | -                                                                                                     |

## Getting Started

Follow these steps to clone the repository and start the development server:

- `git clone https://github.com/Kiranism/next-shadcn-dashboard-starter.git`
- `npm install`
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `npm run dev`

You should now be able to access the application at http://localhost:3000.
