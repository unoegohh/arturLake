const axios = require("axios");
const Country = require("../../../database/models/Country");
const _ = require("lodash");

const importCountriesM = async () => {
  const countries = await axios.get('https://restcountries.com/v3.1/all')

  const ourCountries = await Country.find();

  let foundCountries = 0;
  let addedCountries = 0;

  const countriesToAdd = [];

  countries.data.forEach(country => {
    const oldCountry = _.find(ourCountries, {cca2: country.cca2})
    if(oldCountry){
      foundCountries++;
    }else{
      const newCountry = new Country({
        cca2: country.cca2,
        name: country.translations.rus.common
      })
      addedCountries++;
      countriesToAdd.push(newCountry.save())
    }
  })

  await Promise.all(countriesToAdd)
  return {
    foundCountries,
    addedCountries
  }
}

module.exports = {importCountriesM}
