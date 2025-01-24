import { Request, Response, NextFunction } from 'express'
import { productService } from '../service/product.service'
import { CreateProductDto, UpdateProductDto, ProductQueryDto } from '../dto/product/product.request.dto'
import { AppError, ErrorCode } from '../enum/error.enum'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { ResponseHandler } from '../utils/response.handler'

export class ProductController {
  private static async validateDto(dto: any) {
    const errors = await validate(dto)
    if (errors.length > 0) {
      throw new AppError(
        ErrorCode.VALIDATION_ERROR, 'Validation failed', 400
      )
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = plainToInstance(CreateProductDto, req.body)
      await ProductController.validateDto(dto)
      const result = await productService.create(dto)
      res.status(201).json(ResponseHandler.success(result))
    } catch (error) {
      next(error)
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const query: ProductQueryDto = {
        page: Number(req.query.page) || 1,
        limit: Number(req.query.limit) || 10,
        category: req.query.category as string,
        minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
        maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
        search: req.query.search as string
      }
      await ProductController.validateDto(query)
      const result = await productService.list(query)
      res.json(ResponseHandler.success(result))
    } catch (error) {
      next(error)
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id)
      if (isNaN(id)) {
        throw new AppError(ErrorCode.BAD_REQUEST, 'Invalid ID format')
      }
      const result = await productService.getOne(id)
      res.json(ResponseHandler.success(result))
    } catch (error) {
      next(error)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id)
      if (isNaN(id)) {
          throw new AppError(ErrorCode.BAD_REQUEST, 'Invalid ID format')
      }
      const dto = req.body as UpdateProductDto
      await ProductController.validateDto(dto)
      const result = await productService.update(id, dto)
      res.json(ResponseHandler.success(result))
    } catch (error) {
      next(error)
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id)
      if (isNaN(id)) {
        throw new AppError(ErrorCode.BAD_REQUEST, 'Invalid ID format')
      }
      await productService.delete(id)
      res.status(204).json(ResponseHandler.success("delete success"))
    } catch (error) {
      next(error)
    }
  }
}
