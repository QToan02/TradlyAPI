import express from 'express'
import { get, add, find, modify, remove } from '../../controllers/card'

const router = express.Router()

router.route('/cards').get(get)
router.route('/card/:id').get(find)
router.route('/card').post(add)
router.route('/card/:id').patch(modify)
router.route('/card/:id').delete(remove)

module.exports = router
