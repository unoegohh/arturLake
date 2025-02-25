const requestCatcher = async (req, res, next, method) => {
  try {
    await method(req, res, next)
  }catch(e){
    console.log(123)
    next(e)
  }
}

module.exports = requestCatcher
