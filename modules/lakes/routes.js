const express = require('express')
const router = express.Router([])
const fishCtrl = require('./controllers/fishCtrl')
const lakeCtrl = require('./controllers/lakeCtrl')
const countryCtrl = require('./controllers/countryCtrl')
const requestCatcher = require('../../helpers/requestCatcher')
require('./cron')

router.get('/fish/:id', fishCtrl.getFish)
router.post('/fish', fishCtrl.getFishes)
router.put('/fish', fishCtrl.createFish)

router.put('/lake',async (req, res, next)=> requestCatcher(req,res, next,lakeCtrl.createLake))
router.get('/lake/:lakeId',async (req, res, next)=> requestCatcher(req,res, next,lakeCtrl.getLake))

router.post('/country/import',async (req, res, next)=> requestCatcher(req,res, next,countryCtrl.importCountries))
router.post('/country',async (req, res, next)=> requestCatcher(req,res, next,countryCtrl.getCountries))

module.exports = router;
