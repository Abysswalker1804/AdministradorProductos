import {Request, Response} from 'express'
import {check, validationResult} from 'express-validator'
import Product from '../models/Product.model'

export const createProduct = async (req : Request, res : Response) => {

    await check('name').notEmpty().withMessage('El nombre del Producto no puede ir vacío').run(req)
    await check('price').isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a 0').run(req);
    let errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    const product =  await Product.create(req.body)
    res.json({data: product})
}
