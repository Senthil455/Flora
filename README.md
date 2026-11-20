# Flora

> *"Flowers that never fade."*

Flora is a modern ecommerce platform for premium artificial flowers, offering a seamless shopping experience with cash-on-delivery payment options.

---

## About

**Flora** is an ecommerce application for browsing and purchasing high-quality artificial flowers. With a focus on user experience and convenience, customers can shop beautiful floral arrangements and pay securely upon delivery.

---

## Features

### Shopping Experience
- **Wide Product Selection** — Browse a diverse catalog of artificial flowers and arrangements
- **Search** — Find products quickly from the storefront

### Cart & Checkout
- **Easy Cart Management** — Add, remove, and update quantities seamlessly
- **Cash on Delivery** — No credit card required; pay when you receive your order

### User Features
- **Secure Authentication** — JWT-based login and registration
- **Profile Management** — View and update account details
- **Order History** — Track placed orders
- **Newsletter Subscription** — Stay updated with special offers and new arrivals

### Admin Features
- **Product Management** — Create, update, and delete products
- **Order Management** — Review and manage customer orders
- **User Management** — View registered users

### Security
- **Password Encryption** — Passwords are hashed before storage
- **JWT Authentication** — Token-based session management
- **Input Validation** — Request payloads are validated before processing

---

## Tech Stack

### Frontend
- **React** — UI library for building interactive interfaces
- **React Router** — Client-side routing
- **Vite** — Development server and build tool
- **CSS3** — Custom styling with modern design patterns

### Backend
- **Node.js** — JavaScript runtime environment
- **Express.js** — Minimalist web framework
- **MongoDB** — NoSQL database for flexible data storage
- **Mongoose** — MongoDB object modeling

### Authentication & Security
- **JWT (JSON Web Tokens)** — Secure authentication
- **bcrypt** — Password hashing
- **Joi** — Schema validation
- **CORS** — Cross-Origin Resource Sharing enabled

---

## Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB database

### Backend

```bash
cd backend
npm install
cp .env.example .env
```

Set the following variables in `backend/.env`:

```env
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_mongodb_connection_string
```

Then start the API:

```bash
npm run dev
```

The API runs on `http://localhost:3000` by default.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs on the Vite dev server. To point the frontend at a different API, create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

---

## Project Structure

```
Flora/
├── backend/
│   └── src/
│       ├── middlewares/
│       ├── models/
│       ├── routers/
│       └── services/
└── frontend/
    ├── public/
    └── src/
        ├── api/
        ├── assets/
        ├── components/
        ├── constants/
        ├── context/
        └── pages/
```

---

## License

Flora is a private project. Redistribution, reuse, or copying of code and design elements is not permitted without permission.

---

## Contact

- **Developer:** [Senthil455](https://github.com/Senthil455)
