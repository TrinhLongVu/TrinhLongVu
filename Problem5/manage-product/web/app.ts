import express, { Request, Response } from 'express'
import { AppDataSource } from './config/postgres'
import route from './route/product/route.products'
import { errorHandler, notFoundHandler } from './middleware/error.middleware'
import swaggerUi from 'swagger-ui-express'
import { specs } from './config/swagger'

const app = express()

app.use(express.json())
app.use('/api/v1', route)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('*', notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}).catch((err) => {
  console.error("Error during Data Source initialization:", err)
}) 