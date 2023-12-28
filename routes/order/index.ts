import express from 'express'
import { get, add, find, modify } from '../../controllers/order'

const router = express.Router()

router.route('/orders').get(get)
router.route('/order/:id').get(find)
router.route('/order').post(add)
router.route('/order/:id').patch(modify)

module.exports = router
