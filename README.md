# BidWise: Connect. Bid. Choose.

BidWise is a full-stack web application that connects service seekers with companies through a competitive bidding system, enabling users to compare offers based on price and features for efficient and informed selection.

---

## Features

- Post service requirements
- Companies submit tailored bids
- Compare bids based on price and features
- Secure authentication using JWT and password hashing
- Role-based access for service seekers and companies
- Dedicated dashboards for seekers and companies
- Accept bids and update service status
- Database-backed notifications for bid-related events
- RESTful API architecture

---

## Tech Stack

- **Frontend:** React.js, JavaScript, Tailwind CSS
- **Frontend Tooling:** Vite
- **Routing:** React Router
- **HTTP Client:** Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcryptjs
- **Code Quality:** ESLint

---

## System Architecture

- Modular frontend-backend separation
- RESTful API communication using Axios
- Token-based authentication using JWT
- Role-based authorization through backend middleware and route checks
- MongoDB data persistence using Mongoose models
- Separate models for users, service requests, bids, and notifications

---

## Application Workflow

1. Users register as service seekers or companies.
2. Users log in and receive a JWT.
3. Service seekers post service requirements with a description, budget, and deadline.
4. Companies browse service requests and submit bids.
5. Service seekers review bids and accept a suitable offer.
6. The service status is updated when a bid is accepted.
7. Notifications are stored in the database for bid-related events.

---

## Screenshots

### Home Page

<img width="1896" height="899" alt="BidWise Home Page" src="https://github.com/user-attachments/assets/03f6ba5e-0567-4fd8-9308-f9d9fe6297c4" />

### Post Service Requirement

<img width="1897" height="896" alt="Post Service Requirement" src="https://github.com/user-attachments/assets/da1be54e-41f2-49e8-b5c4-5e5a4bbdeeab" />

<img width="1899" height="308" alt="Service Request Form" src="https://github.com/user-attachments/assets/0f90d365-080c-4a1f-bbbb-0153def6be2e" />

### View Bids

<img width="1600" height="1012" alt="View Bids" src="https://github.com/user-attachments/assets/919ee388-d919-40ac-b415-2aa22c5e60b9" />

### Dashboards

<img width="1600" height="1016" alt="BidWise Dashboard" src="https://github.com/user-attachments/assets/2b9e1c32-f645-479e-8242-1afa186c34e3" />

<img width="1600" height="1012" alt="BidWise Dashboard View" src="https://github.com/user-attachments/assets/5f35d3a1-3ab7-4a9c-8eba-196b7038bad6" />

<img width="1600" height="1018" alt="BidWise Dashboard Interface" src="https://github.com/user-attachments/assets/f5c442af-f4c4-482d-9bd3-025f66cd698f" />

---

## Database Models

- **User:** Stores user information, credentials, roles, and profile details.
- **ServiceRequest:** Stores service requirements, budgets, deadlines, seeker references, and service status.
- **Bid:** Stores the associated service, bidding company, proposed amount, additional details, and acceptance status.
- **Notification:** Stores notification recipients, messages, links, and read status.

---

## API Overview

| Endpoint | Purpose |
|---|---|
| `/api/auth` | User registration, login, and authentication-related operations |
| `/api/services` | Create and retrieve service requests |
| `/api/bids` | Submit bids, retrieve bids, and accept offers |
| `/api/notifications` | Retrieve notifications and mark them as read |
| `/health` | Check backend server health |

---

## Project Structure

```text
BidWise/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── router/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/
    ├── config/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB installed locally or a MongoDB Atlas connection

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd BidWise
```

Replace `<YOUR_REPOSITORY_URL>` with your repository URL.

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Replace the placeholder values with your actual configuration. Never commit your `.env` file or expose your secrets publicly.

### 3. Start the Backend

From the `server` directory, run:

```bash
npm run dev
```

The backend starts using Nodemon.

### 4. Set Up the Frontend

Open a separate terminal and run:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed in the terminal by Vite.

Ensure the frontend API configuration points to the backend at `http://localhost:5050/api`, unless you have configured a different URL.

### 5. Build the Frontend

From the `client` directory:

```bash
npm run lint
npm run build
```

These commands run ESLint and generate the production frontend build.

---

## Future Enhancements

- Real-time notifications using WebSockets or Socket.IO
- Improved bid validation and lifecycle management
- Ratings and reviews for companies
- Payment gateway integration
- Advanced bid comparison and filtering
- Mobile application support
- Automated frontend and backend testing

---

## UML and Design Diagrams

The project can be documented using the following design diagrams:

- Use Case Diagram
- Class Diagram
- Sequence Diagram
- Activity Diagram
- State Diagram
- Component Diagram
- Deployment Diagram
- Data Flow Diagram (DFD)

Add links or images for these diagrams when they are available in the repository.

---

## License

This project is for academic and educational purposes.
