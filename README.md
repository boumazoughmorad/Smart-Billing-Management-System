# Billing Management System

## Overview
This application facilitates bill generation for any company while storing all client and product information. It allows for easy retrieval and reuse of billing data. Additionally, it provides statistical insights with various calculations to help users analyze the stored data effectively.

## Features
- Generate bills efficiently for any company
- Store and manage client and product information
- Easily retrieve and reuse billing data
- View statistical insights with advanced calculations
- Secure authentication using JWT (JSON Web Token)
- Built with Angular for the frontend and Laravel for the backend
- Ensures UI and backend separation for better security and maintainability

## Technologies Used
```plaintext
- Frontend: Angular
- Backend: Laravel
- Authentication: JWT
- Database: MySQL (or any preferred database)
```

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
```plaintext
- Node.js and npm
- Angular CLI
- PHP and Composer
- MySQL (or any compatible database)
```

### Backend Setup (Laravel)
```sh
# Clone the repository and navigate to the backend folder
git clone https://github.com/boumazoughmorad/Smart-Billing-Management-System.git
cd backend

# Install dependencies
composer install

# Configure the .env file with your database credentials

# Run database migrations
php artisan migrate

# Start the Laravel server
php artisan serve
```

### Frontend Setup (Angular)
```sh
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the Angular development server
ng serve
```

## Usage
```plaintext
- Access the application via http://localhost:4200 (default Angular port).
- Login using your credentials.
- Generate bills, manage clients and products, and analyze statistics securely.
```

## Security
```plaintext
- JWT is used for secure authentication.
- Proper role-based access control (RBAC) is implemented.
```




