import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API Documentation',
      version: '1.0.0',
      description: 'API documentation for the Product service'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server'
      }
    ]
  },
  apis: ['./web/docs/swagger/*.swagger.ts']
}

export const specs = swaggerJsdoc(options) 