
const fishToClient = (fish) => {
  return {
    id: fish.id,
    name: fish.name
  }
}

const fishesToClient = (fishes) => {
  console.log('fishes', fishes)
  return fishes.map(fishToClient)
}

module.exports = {
  fishesToClient,
  fishToClient
}
