import express from 'express'
import { register } from '../../controller/auth'

const router = express.Router()

router.route('/register').post(register)

module.exports = router
