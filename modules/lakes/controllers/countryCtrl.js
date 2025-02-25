const axios = require('axios')
const Country = require('../../../database/models/Country')
const _ = require('lodash')
const {importCountriesM} = require('../managers/countryManagers')

const importCountries = async (req, res, next) => {

  const {addedCountries, foundCountries} = await importCountriesM()

  res.json({success: true,addedCountries , foundCountries})
}
const getCountries = async (req, res, next) => {

  const countries = await Country.find()

  res.json({success: true,countries: countries.map(u=>({name:u.name, id: u._id}))})
}


module.exports = {
  importCountries,
  getCountries
}
