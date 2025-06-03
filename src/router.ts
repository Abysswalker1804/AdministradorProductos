<<<<<<< HEAD
import {Router} from 'express'

const router=Router()

//Routing
router.get('/', (req,res) =>{
    res.json('Desde GET')
})
router.post('/', (req,res) =>{
    res.json('Desde POST')
})
router.put('/', (req,res) =>{
    res.json('Desde PUT')
})
router.patch('/', (req,res) =>{
    res.json('Desde PATCH')
})
router.delete('/', (req,res) =>{
=======
import {Router} from 'express';
import { createProduct } from './handlers/product';

const router= Router()
//Routing
router.get('/',(req, res)=>{
    res.json('Desde GET')
})

router.post('/', createProduct);

router.put('/',(req, res)=>{
    res.json('Desde PUT')
})

router.patch('/',(req, res)=>{
    res.json('Desde PATCH')
})

router.delete('/',(req, res)=>{
>>>>>>> e6d42d1 (Actualización 03/06/2025)
    res.json('Desde DELETE')
})

export default router