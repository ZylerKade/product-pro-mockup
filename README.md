# Digital Product Sales Funnel Landing Page

A high-conversion landing page template for digital products, including lead capture and mock checkout functionality.

You can preview a live version of this landing page at https://productpro.solomain.com

## 🚀 Features

- **Conversion-Optimized Design:** Professional landing page layout with strategic components for maximizing conversions
- **Lead Capture Form:** Email opt-in functionality with validation and confirmation
- **Mock Checkout Flow:** Simulated payment processing with Stripe-inspired UI 
- **Analytics Tracking:** Local analytics for leads, downloads, and purchases
- **Responsive Design:** Fully mobile-responsive across all devices
- **Portfolio Ready:** Clearly labeled as a mock project with developer contact information

## 📋 Project Structure

The project follows a modern React/TypeScript architecture:

```
├── client            # Frontend code
│   ├── src           # Source files
│   │   ├── components # UI components
│   │   ├── hooks     # Custom React hooks
│   │   ├── lib       # Utility functions
│   │   ├── pages     # Page components
│   │   └── types     # TypeScript type definitions
├── server            # Express server (minimal)
└── shared            # Shared types and schemas
```

## 🛠️ Technologies Used

- **Frontend:**
  - React + TypeScript
  - TailwindCSS + ShadcnUI
  - React Hook Form + Zod validation
  - React Query
  - Wouter (lightweight routing)

- **Backend:**
  - Express (minimal server)
  - In-memory storage

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/zylerkade/digital-product-sales-funnel.git
   cd digital-product-sales-funnel
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:3000`

## 📝 Notes

- **Mock Project:** This is a portfolio demonstration project. No actual products or services are sold.
- **Data Storage:** All data is stored in-memory and resets when the server restarts.
- **Simulated API:** The checkout process simulates payment processing without connecting to actual payment gateways.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contact

For questions, collaborations, or hiring inquiries, please visit [https://solomain.com/upwork](https://solomain.com/upwork).
