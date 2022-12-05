const express = require('express')
const { getAllCrisis } = require('../controller/dbCrisisController')
const router = express.Router()

router.get('/crisis', getAllCrisis)

module.exports = router