
const Lake = require('../../../database/models/Lake')
const Country = require("../../../database/models/Country");

const createLake = async (req, res, next) =>{
  const {name, countryId} = req.body

  //проверяем страну
  const country = await Country.findOne({_id: countryId})
  if(!country){
    throw new Error(`No country with id ${countryId}`)
  }
  //
  const lake = new Lake({
    name,
    country: countryId
  })
  await lake.save();
  res.json({
    success: true,
    newLakeId: lake._id
  })
}

const getLake = async (req,res) => {
  const {lakeId} = req.params
  console.log('lakeId', lakeId)
  const lake = await Lake.findOne({_id: lakeId}).populate('country')

  res.json({
    success: true,
    lake: {
      id: lake._id,
      name: lake.name,
      country: {
        name: lake.country.name,
        id: lake.country._id
      }
    }
  })
}

module.exports = {
  createLake,
  getLake
}
