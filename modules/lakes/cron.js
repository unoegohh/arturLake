
var cron = require('node-cron');
const {importCountriesM} = require("./managers/countryManagers");

cron.schedule('* * 23 * * *', async () => {
  console.log('country import ');
  await importCountriesM()
});
