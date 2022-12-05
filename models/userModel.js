const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {type:String},
    lname: {type:String},
    phone: {type:String},
}, {timestamps: true});

module.exports = mongoose.model("user", userSchema);