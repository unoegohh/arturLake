
const Fish = require('../../../database/models/Fish')
const {body, validationResult} = require('express-validator')
const {fishesToClient, fishToClient} = require('../helpers/fishConverters')

const getFishes = async (req, res) =>{
  const fishes = await Fish.find();

  res.json({
    success: false,
    fishes: fishesToClient(fishes)
  })
}
const createFish = async (req, res, next) =>{
  try {
    const {name} = req.body

    const fish = new Fish({
      name
    })
    await fish.save();
    res.json({
      success: false,
      newFishId: fish._id
    })
  }catch(e){
    next(e)
  }
}

const getFish = async (req, res, next) =>{
  try {
    const {id} = req.params
    const fish = await Fish.findOne({_id: id})
    res.json({
      success: false,
      fish: fishToClient(fish)
    })
  }catch(e){
    next(e)
  }
}


module.exports = {
  getFishes,
  createFish,
  getFish
}
