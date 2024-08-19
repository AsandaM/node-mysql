import express from 'express'
import { getFruits, getFruit, insertFruit, deleteFruit, editFruit, addToCart } from '../controller/fruitsController.js'
import {verifyAToken} from '../middleware/authenticate.js'

const router = express.Router()

router.get('/',  getFruits)
router.post('/', insertFruit)

router.post('/cart', verifyAToken, addToCart)

router
    .route('/:id')
        .get(getFruit)
        .delete(deleteFruit)
        .patch(editFruit)

export default router