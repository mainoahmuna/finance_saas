# Finance SaaS Platform (Work in Progress)

A comprehensive Finance SaaS platform that allows users to track income and expenses, categorize transactions, import CSV data, and securely connect to bank accounts using Plaid. Built with a focus on scalability, customization, and intuitive user experience.

## Key Features
- Interactive financial dashboard for real-time income and expense tracking
- Switchable chart types for dynamic data visualization
- Filters for accounts and date ranges
- Detailed transaction tables with bulk delete and search functionality
- Custom form for adding new transactions
- Customizable select components for account and transaction categories
- Income and expense toggle for simplified financial views
- CSV transaction import support
- API integration via Hono.js for seamless data management
- State management using Tanstack React Query for optimized client-side data handling
- Secure bank account connections via Plaid
- User authentication and security via Clerk (Core 2)
- Subscription management and bank disconnection capabilities
- User settings customization for enhanced personalization
- Built with Next.js 14 for performance and scalability
- Styled with TailwindCSS and Shadcn UI for a modern and responsive design
- PostgreSQL & Drizzle ORM for efficient database management

## Tech Stack
- **Frontend**: Next.js 14, React, TailwindCSS, Shadcn UI
- **Backend**: Hono.js, PostgreSQL, Drizzle ORM
- **Authentication**: Clerk (Core 2)
- **State Management**: Tanstack React Query
- **Bank Integration**: Plaid API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/finance-saas-platform.git
   cd finance-saas-platform
   ```
2. Install Dependencies
   ```bash
   npm install
   ```
3. Set up environment variables
   - Create a .env.local file in the root directory
   - Add your Plaid API keys, database connection URL, and any other environment variables.
4. Run the Dev Server
  ```bash
  npm run dev
  ```
5.	Open your browser and navigate to http://localhost:3000 to view the application.

## What I learned
- **Plaid API Integration**: Gained experience integrating with Plaid to securely connect users’ bank accounts, which involved managing tokens and handling sensitive financial data.
- **State Management with React Query**: Learned how to efficiently manage client-side state using Tanstack React Query, especially for handling data fetching, caching, and synchronization.
- **Next.js & Performance Optimization**: Leveraged the power of Next.js for server-side rendering, static generation, and route-based code splitting to improve performance and user experience.
- **PostgreSQL & Drizzle ORM**: Developed a deeper understanding of relational databases by designing and managing complex schemas, and used Drizzle ORM for query building and database operations.
- **Authentication with Clerk**: Implemented secure authentication mechanisms, providing users with safe access and managing sensitive account data.
- **Responsive UI Design**: Enhanced my skills in building responsive, modern user interfaces using TailwindCSS and Shadcn UI, focusing on accessibility and user experience.
 
