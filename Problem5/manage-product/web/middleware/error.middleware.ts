import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import { AppError } from '../enum/error.enum'

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    code: 'NOT_FOUND',
    message: `Route ${req.method} ${req.url} not found`
  })
}

export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      code: err.code,
      message: err.message
    });
  } else {
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error'
    });
  }
} 