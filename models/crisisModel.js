const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const crisisSchema = new Schema({
    id: {type:Number},
    createdDate: {type:String},
    severity: {type:Number},
    status: {type:Number},
}, {timestamps: true});

module.exports = mongoose.model("crisis", crisisSchema);