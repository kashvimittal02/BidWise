
# BidWise — Connect. Bid. Choose.

BidWise is a full-stack service bidding platform that connects people who need services with companies that provide them. Seekers can post service requests, companies can submit bids, and seekers can compare offers and accept a suitable bid.

## Features

- **User Authentication:** Register and log in securely using JWT-based authentication.
- **Role-Based Access:** Supports two user roles — seeker and company.
- **Post Service Requests:** Seekers can create requests with a title, description, budget, and deadline.
- **Browse Services:** View available service requests and their details.
- **Place Bids:** Companies can submit bids with an amount and proposal details.
- **Bid Management:** Retrieve bids for a service and accept bids as the seeker who posted the request.
- **Database Notifications:** Store notifications when bids are placed or accepted.
- **Protected Routes:** Restrict access to selected pages and backend endpoints based on authentication and user role.

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

## Project Structure

```text
BidWise/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── router/
│   │   └── utils/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB local installation or MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/kashvimittal02/BidWise.git
cd BidWise
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```env
PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the example values with your actual MongoDB connection string and a strong, private JWT secret. Never commit your `.env` file.

Start the backend:

```bash
npm run dev
```

The backend runs on port `5050` by default.

Check the backend health endpoint at:

http://localhost:5050/health

### 3. Set Up the Frontend

Open a second terminal from the project root:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed in the terminal by Vite.

The frontend currently sends API requests to:

`http://localhost:5050/api`

Ensure the backend is running and MongoDB is connected before using the application.

## API Overview

| Endpoint | Purpose |
|---|---|
| `/api/auth` | User registration, login, and authentication |
| `/api/services` | Create, browse, and retrieve service requests |
| `/api/bids` | Place bids, retrieve bids, and accept bids |
| `/api/notifications` | Retrieve notifications and mark them as read |
| `/health` | Check backend availability |

Protected endpoints require a valid JWT token in the `Authorization` header.

## Core Workflow

1. A user registers as a seeker or a company.
2. A seeker posts a service request.
3. Companies browse requests and submit bids.
4. The seeker reviews the bids and accepts a suitable offer.
5. Bid-related notifications are stored in the database.

## Future Improvements

- Add automated tests for authentication, service requests, and bidding.
- Improve input validation and error handling.
- Implement a functional notification interface.
- Configure production deployment and environment-specific API URLs.

