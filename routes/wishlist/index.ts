import express from 'express'
import { get, add, find, modify, remove } from '../../controllers/wishlist'

const router = express.Router()

router.route('/wishlists').get(get)
router.route('/wishlist/:id').get(find)
router.route('/wishlist').post(add)
router.route('/wishlist/:id').patch(modify)
router.route('/wishlist/:id').delete(remove)

module.exports = router
