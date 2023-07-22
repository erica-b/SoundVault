const {Profile} = require("../models")


  const findProfile = async (req,res,next) => {
    console.log("Find single user by pk in db")
    const id = req.params.id;
    req.user = await Profile.findByPk(id)
  console.log(req.user);
    next()
}


module.exports = {findProfile}
