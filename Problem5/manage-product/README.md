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

### Books

| Method | Endpoint     | Description      | Request Body |
|--------|-------------|------------------|--------------|
| POST   | /books      | Create book      | Book object  |
| GET    | /books      | List all books   | -            |
| GET    | /books/:id  | Get single book  | -            |
| PUT    | /books/:id  | Update book      | Book object  |
| DELETE | /books/:id  | Delete book      | -            |

### Book Object Structure

```json
{
"title": "string",
"author": "string",
"publishYear": number,
"genre": "string"
}
```

## 🛠 Project Structure
```
book-library/
├── web/
│   ├── controller/    # Request handlers
│   ├── entity/       # Database entities
│   ├── middleware/   # Express middlewares
│   ├── dto/          # Data transfer objects
│   └── config/       # Configuration files
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