# Email Subscription Tracker Backend
This is a robust, production-ready backend API for an **email subscription management system**. I built this as a learning project, focusing on architecting secure and scalable APIs. It incorporates advanced features like JWT authentication, database modeling, security best practices, and automated workflows.

## Features
- **RESTful API Design:** Provides a clean and efficent set of RESTful endpoints for managing user authentication and subscriptions.
- **JWT Authentication:** Implements JSON Web Token for secure user authentication and authorization.
- **Database Modeling:** Utilizes MongoDB for flexible and scalable data storage, with a well-defined schema for users and subscriptions.
- **API Security:** Integrated Arcjet for enhanced API security, protecting againAst common web vulnerabilities.
- **Automated Workflows:** Leverages Nodemailer to send automated emails, such as reminders and notifications.
- **Comprehensive CRUD Operations:** Full Create, Read, Update, Delete (CRUD) functionality for users and subscriptions, including authorization checks.
- **Subscription Management:** Includes functionality for tracking upcoming subscription renewals.
- **Efficient API Testing:** Used HTTPie for effective testing of API endpoints during development.

## Technologies Used
- **Language:** Javascript
- **Web Framework:** Express.js
- **Database:** MongoDB
- **Security:** Arcjet
- **Email Service:** Nodemailer
- **Caching/Data Store:** Upstash
- **API Testing:** HTTPie

## API Endpoints

---

### Authentication Endpoints (`/api/v1/auth`)

These endpoints handle user authentication processes, including registration, login, and logout.

| Method | Endpoint | Description |
| :----- | :---------- | :------------------------------ |
| `POST` | `/sign-up` | Registers a new user account. |
| `POST` | `/sign-in` | Authenticates a user and logs them in. |
| `POST` | `/sign-out` | Logs out the currently authenticated user. |

---

### User Endpoints (`/api/v1/users`)

These endpoints manage user-related information. Some endpoints require authorization.

| Method | Endpoint | Middleware | Description |
| :------- | :-------- | :--------- | :------------------------------------ |
| `GET` | `/` | \- | Retrieves a list of all users. |
| `GET` | `/:id` | `authorize` | Retrieves details for a specific user by ID. |
| `POST` | `/` | \- | Creates a new user record. |
| `PUT` | `/:id` | \- | Updates an existing user's information by ID. |
| `DELETE` | `/:id` | \- | Deletes a user record by ID. |

---

### Subscription Endpoints (`/api/v1/subscriptions`)

These endpoints manage user subscriptions, allowing for creation, retrieval, updates, and cancellations. Some endpoints require authorization.

| Method | Endpoint | Middleware | Description |
| :------- | :----------------------- | :--------- | :------------------------------------------ |
| `GET` | `/` | \- | Retrieves all subscriptions. |
| `GET` | `/:id` | \- | Retrieves a specific subscription by its ID. |
| `POST` | `/` | `authorize` | Creates a new subscription. |
| `PUT` | `/:id` | \- | Updates an existing subscription by ID. |
| `DELETE` | `/:id` | \- | Deletes a subscription by ID. |
| `GET` | `/user/:id` | `authorize` | Retrieves all subscriptions for a specific user ID. |
| `PUT` | `/:id` | \- | Cancels a user's subscription by ID. |
| `GET` | `/upcoming-renewals` | \- | Retrieves a list of upcoming subscription renewals. |

---

### Workflow Endpoints (`/api/v1/workflows`)

These endpoints handle automated processes and workflows.

| Method | Endpoint | Middleware | Description |
| :----- | :--------------------- | :--------- | :--------------------------------------------- |
| `POST` | `/subscription/reminder` | \- | Triggers the sending of subscription reminders. |

---

### Authorization Middleware

Endpoints marked with `authorize` require a valid authentication token to be present in the request (e.g., in the `Authorization` header).

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

-   **Git**
    
-   **Node.js**
    
-   **npm** (Node Package Manager)
    

### Cloning the Repository

```
git clone https://github.com/prowessclust/subscription-tracker.git
cd subscription-tracker
```

## Installation

Install the project dependencies using npm:

```
npm install
```

## Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

## Running the Project

```
npm run dev
```

Open `http://localhost:5500` in your browser or any HTTP client to test the project.
