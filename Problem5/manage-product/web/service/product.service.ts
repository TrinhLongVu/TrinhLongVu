import { AppDataSource } from '../config/postgres'
import { Product } from '../entity/product'
import { Like, Between } from 'typeorm'
import { CreateProductDto, UpdateProductDto, ProductQueryDto } from '../dto/product/product.request.dto'
import { AppError, ErrorCode } from '../enum/error.enum'

class ProductService {
  private productRepository = AppDataSource.getRepository(Product)

  async create(dto: CreateProductDto): Promise<Product> {
    try {
      const product = this.productRepository.create(dto)
      return await this.productRepository.save(product)
    } catch (error) {
      throw new AppError(ErrorCode.INTERNAL_SERVER, 'Error creating product')
    }
  }

  async list(query: ProductQueryDto) {
    try {
      const page = query.page || 1
      const limit = query.limit || 10
      const skip = (page - 1) * limit
      
      let whereClause: any = {}
      
      if (query.category) {
        whereClause.category = query.category
      }
      
      if (query.search) {
        whereClause.name = Like(`%${query.search}%`)
      }
      
      if (query.minPrice || query.maxPrice) {
        whereClause.price = Between(
            query.minPrice || 0,
            query.maxPrice || 999999
        )
      }

      const [products, total] = await this.productRepository.findAndCount({
        where: whereClause,
        order: { createdAt: 'DESC' },
        skip,
        take: limit
      })
      
      return {
        data: products,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
      }
    } catch (error) {
      throw new AppError(ErrorCode.INTERNAL_SERVER, 'Error fetching products')
    }
  }

  async getOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id })
    if (!product) {
        throw new AppError(ErrorCode.NOT_FOUND, 'Product not found', 404)
    }
    return product
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
      const product = await this.getOne(id)
    this.productRepository.merge(product, dto)
    try {
      return await this.productRepository.save(product)
    } catch (error) {
      throw new AppError(ErrorCode.INTERNAL_SERVER, 'Error updating product')
    }
  }

  async delete(id: number): Promise<void> {
    const product = await this.getOne(id)
    try {
      await this.productRepository.remove(product)
    } catch (error) {
      throw new AppError(ErrorCode.INTERNAL_SERVER, 'Error deleting product')
    }
  }
} 

export const productService = new ProductService()