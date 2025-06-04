import {Router} from 'express';
import {body, param} from 'express-validator'
import { createProduct, getProducts, getProductBYID, updateProduct, updateAvailability, deleteProduct } from './handlers/product';
import { handleInputErrors } from './middlewar';

const router= Router()
//Routing
router.get('/',getProducts)
router.get('/:id',
    param('id').isInt().withMessage('ID no es valido'),
    handleInputErrors,
    getProductBYID)

router.post('/', 
  body ('name')
  .notEmpty().withMessage('El nombre del Producto no puede ir vacío'),
  body ('price')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a 0')
    .notEmpty().withMessage('El precio del producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no valido'),
    handleInputErrors,
    createProduct)

router.put('/:id', 
    param('id').isInt().withMessage('ID no es valido'),
     body ('name')
  .notEmpty().withMessage('El nombre del Producto no puede ir vacío'),
  body ('price')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a 0')
    .notEmpty().withMessage('El precio del producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no valido'),
    body('avaibility')
    .isBoolean().withMessage('Valor para disponibilidad no valido'),
    handleInputErrors,
    updateProduct)

router.patch('/:id', 
    param('id').isInt().withMessage('ID no es valido'),
    handleInputErrors,
    updateAvailability)

router.delete('/:id',
    param('id').isInt().withMessage('ID no es valido'),
    handleInputErrors,
    deleteProduct
 )

export default router