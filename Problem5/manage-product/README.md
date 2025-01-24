# Product Application

A RESTful API service for managing a Product, built with Node.js, Express, TypeORM, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)

### Running the Application

1. Clone the repository
2. Start the application: at the directory (manage-product)
```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`
### OpenAPI Documentation
The API documentation is available through Swagger UI at `/api-docs` when the application is running.

## 📚 API Endpoints

### products

| Method | Endpoint       | Description         | Request Body    |
|--------|----------------|---------------------|-----------------|
| POST   | /products      | Create product      | Product object  |
| GET    | /products      | List all products   | -               |
| GET    | /products/:id  | Get single product  | -               |
| PUT    | /products/:id  | Update product      | Product object  |
| DELETE | /products/:id  | Delete product      | -               |


### Book Object Structure

```json
{
  "name": "string",
  "description": "string",
  "price": 0,
  "category": "string"
}
```

## 🛠 Project Structure
```
book-library/
├── web/
│   ├── controller/   # Request handlers handle response 
│   ├── entity/       # Database entities
│   ├── middleware/   # Express middlewares
│   ├── dto/          # Data transfer objects
│   └── route/        # routing api
│   └── enum/         # contain enums
│   └── service/      # business logic
│   └── docs/         # having config open api
│   └── config/       # Configuration files
│   app.ts            # file server dun app
├── docker-compose.yml
└── Dockerfile
```

## 🔧 Configuration

### Database Configuration
- Host: localhost
- Port: 5432
- Database: library
- Username: library
- Password: 12345

## 🐳 Docker

The application uses Docker Compose with two services:
- `app`: Node.js application
- `postgres`: PostgreSQL database

### Volumes
- `postgres_data`: Persists database data

## 🔍 Development

### Local Setup
1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm start
```

## 📝 API Documentation

Swagger documentation is available at `/api-docs` when the application is running.

## 🧪 Error Handling

The application includes global error handling middleware for consistent error responses.