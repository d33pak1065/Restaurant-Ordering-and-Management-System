# Restaurant Ordering & Management System

A full-stack restaurant ordering and management system built with React, Node.js, Express, and MongoDB.

The application allows customers to browse the restaurant menu, register and log in securely, place food orders, and manage their order history. It also includes an administrator panel for managing menu items and restaurant operations.

> **Note**
>
> This project was originally developed as a learning project to gain practical experience in building production-style full-stack web applications using the MERN stack.

---

# Project Overview

Modern restaurants require an efficient digital ordering system that allows customers to place orders while enabling administrators to manage menu items from a single dashboard.

This application demonstrates a complete full-stack implementation including authentication, protected routes, role-based access, REST APIs, database integration, and responsive user interfaces.

---

# Features

## Customer

- User Registration
- Secure Login using JWT Authentication
- Browse Restaurant Menu
- Category-based Menu Filtering
- Add Items to Cart
- Checkout Process
- View Order History
- Responsive User Interface

---

## Administrator

- Secure Admin Login
- Create Menu Items
- Update Menu Items
- Delete Menu Items
- Manage Customer Orders

---

# Technology Stack

## Frontend

- React 19
- React Router
- Axios
- Bootstrap
- React Bootstrap
- Custom CSS

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- REST APIs

---

## Database

- MongoDB
- Mongoose

---

# Project Structure

```
Restaurant Ordering System
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── frontend
    ├── src
    │   ├── api
    │   ├── components
    │   ├── styles
    │   └── utils
    └── public
```

---

# Authentication

The project uses JSON Web Tokens (JWT) to secure protected routes.

Authentication Flow

- User Login
- JWT Token Generation
- Token stored in Local Storage
- Protected API Requests
- Role-based Authorization

---

# API Modules

Backend APIs include:

- Authentication
- Menu Management
- Orders
- Administrator Operations

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Backend

```
PORT=
MONGO_URI=
JWT_SECRET=
```

Frontend

```
REACT_APP_API_URL=http://localhost:5000/api
```

---

# Screenshots

Screenshots will be added soon.

Suggested screenshots:

- Login
- Registration
- Home Page
- Menu
- Cart
- Checkout
- Orders
- Admin Dashboard

---

# Future Improvements

Planned enhancements include:

- Payment Gateway Integration
- Search Functionality
- Food Image Upload
- Order Tracking
- User Profile Management
- Email Notifications
- Dashboard Analytics

---

# What I Learned

While building this project, I gained practical experience in:

- Designing REST APIs
- React Component Architecture
- JWT Authentication
- MongoDB Data Modeling
- State Management
- API Integration
- Responsive Web Design
- Full-stack Application Development

---

# Author

**Sri Deepak Bolisetti**

Software Developer

GitHub:
https://github.com/d33pak1065

LinkedIn:
https://linkedin.com/in/sri-deepak-bolisetti-096006344
