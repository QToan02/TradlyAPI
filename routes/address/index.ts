import express from 'express'
import { get, add, find, modify, remove } from '../../controllers/address'

const router = express.Router()

router.route('/addresses').get(get)
router.route('/address/:id').get(find)
router.route('/address').post(add)
router.route('/address/:id').patch(modify)
router.route('/address/:id').delete(remove)

module.exports = router
