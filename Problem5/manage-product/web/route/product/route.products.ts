const express = require('express')
const router = express.Router()
import { ProductController } from '../../controller/product.controller'
    
router.post('/products', ProductController.create)
router.get('/products', ProductController.list)
router.get('/products/:id', ProductController.getOne)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.delete)
  
export default router