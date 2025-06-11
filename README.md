# E-commerce Store with Next.js & Sanity

This project is a modern and fully responsive e-commerce store built using **Next.js App Router**, integrated with **Sanity CMS** for content management and **Stripe** for payment processing.

## Features

-  Built with **Next.js 15** using the App Router
-  Modular and reusable components
-  Fully integrated **Sanity Studio** (embedded inside the app)
-  Stripe checkout integration
-  Product listing, categories, cart, and order tracking
-  Product search with dynamic routing
-  Draft mode support for previewing unpublished content
-  Optimized with **TailwindCSS**, **Framer Motion**, and **Radix UI**

##  Tech Stack

| Category        | Technology                         |
|----------------|-------------------------------------|
| Framework       | Next.js 15                         |
| CMS             | Sanity.io                          |
| Payments        | Stripe                             |
| Styling         | TailwindCSS, Styled-Components     |
| Animations      | Framer Motion                      |
| UI Components   | Radix UI, Lucide Icons             |
| Auth            | Clerk                              |
| State Management| Zustand                            |

## 🗂️ Project Structure

```bash
├── app/              # App Router pages and routes
│   ├── (store)/      # Main storefront layout and pages
│   ├── draft-mode/   # Enable/disable draft preview
│   └── studio/       # Embedded Sanity Studio
├── components/       # UI components and domain-specific elements
├── lib/              # Utilities and API integrations
├── sanity/           # Sanity schemas, queries, and client setup
├── store/            # Zustand store
├── public/           # Static assets
└── actions/          # Server actions like checkout session
```