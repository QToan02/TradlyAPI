import express from 'express'
import { get } from '../../controllers/category'

const router = express.Router()

router.route('/categories').get(get)

module.exports = router
