import express from 'express'
import { get, add, find, modify, remove } from '../../controllers/store'

const router = express.Router()

router.route('/stores').get(get)
router.route('/store/:id').get(find)
router.route('/store').post(add)
router.route('/store/:id').patch(modify)
router.route('/store/:id').delete(remove)

module.exports = router
