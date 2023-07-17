const {Profile} = require("../models")

const findProfile = async (req,res,next) => {
  const profile = await Profile.findByPk(req.session.profileID)
    console.log("Find single user by pk in db")
    const id = req.params.id;
    req.profile = await Profile.findByPk(id)
  console.log(req.profile);
    next()
}


module.exports = findProfile
