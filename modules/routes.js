const express = require('express')
const router = express.Router([])
const lakesModule = require('./lakes/routes')

router.use('/lakes', lakesModule)

module.exports = router;
