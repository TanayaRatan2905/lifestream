# Blood Donation Backend API

This is a RESTful API for a blood donation management system built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Donor management
- Blood donation drive management
- Donation tracking
- Review system for donation drives

## Project Structure

```
backend/
  ├── config/          # Database and other configuration
  ├── controllers/     # Route controllers
  ├── middleware/      # Custom middleware
  ├── models/          # MongoDB models
  ├── routes/          # API routes
  ├── utils/           # Utility functions
  ├── .env             # Environment variables
  ├── server.js        # Entry point
  └── package.json     # Node.js dependencies
```

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new donor
- `POST /api/auth/login` - Login a donor
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updatepassword` - Update password
- `POST /api/auth/forgotpassword` - Recover password

### Donor Routes

- `GET /api/donors` - Get all donors (admin only)
- `POST /api/donors` - Create new donor
- `GET /api/donors/:id` - Get a single donor
- `PUT /api/donors/:id` - Update donor
- `DELETE /api/donors/:id` - Delete donor (admin only)
- `GET /api/donors/:id/donations` - Get donor's donation history

### Donation Drive Routes

- `GET /api/drives` - Get all drives
- `POST /api/drives` - Create new drive (admin only)
- `GET /api/drives/:id` - Get a single drive
- `PUT /api/drives/:id` - Update drive (admin only)
- `DELETE /api/drives/:id` - Delete drive (admin only)
- `POST /api/drives/:id/reviews` - Add review to a drive
- `GET /api/drives/:id/donations` - Get all donations for a drive (admin only)

### Donation Routes

- `GET /api/donations` - Get all donations (admin only)
- `POST /api/donations` - Create new donation
- `GET /api/donations/:id` - Get a single donation
- `PUT /api/donations/:id` - Update donation (admin only)
- `DELETE /api/donations/:id` - Delete donation (admin only)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create .env file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blood_donation
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

3. Run the server:

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Models

### Donor Model

- fullName
- email
- password
- contact
- age
- gender
- bloodType
- weight
- address
- medicalConditions
- medications
- lastDonation
- eligibilityStatus
- donations
- isAdmin

### Donation Drive Model

- title
- date
- location
- description
- status
- organizer
- contactPerson
- targetUnits
- collectedUnits
- participants
- images
- reviews
- donations

### Donation Model

- donor
- drive
- donationDate
- bloodType
- quantity
- hasMedicalConditions
- medicalConditionsDetails
- status
- location
- notes
- followUpDate
- healthStatus

## Authentication

The API uses JWT (JSON Web Token) for authentication. Protected routes require a valid token to be included in the Authorization header as a Bearer token. 