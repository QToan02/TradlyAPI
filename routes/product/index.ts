import express from 'express'
import { get, add, find, modify, remove, getRecommended } from '../../controllers/product'

const router = express.Router()

router.route('/products').get(get)
router.route('/product/:id').get(find)
router.route('/product').post(add)
router.route('/product/:id').patch(modify)
router.route('/product/:id').delete(remove)
router.route('/products/recommended').get(getRecommended)

module.exports = router
