const crisisSchema = require('../models/crisisModel');

//get all users
const getAllCrisis = async(req, res) => {
    // var users = await crisisSchema.find({}).sort({createdAt: -1}) // sorted in decending order
    var crisis = await crisisSchema.find({})
    res.status(200).json(crisis);
}

module.exports = {
    getAllCrisis
}