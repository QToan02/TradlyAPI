import express from 'express'
import { get, add, find, modify, remove } from '../../controllers/product'

const router = express.Router()

router.route('/products').get(get)
router.route('/product/:id').get(find)
router.route('/product').post(add)
router.route('/product/:id').patch(modify)
router.route('/product/:id').delete(remove)

module.exports = router
