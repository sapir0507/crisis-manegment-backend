const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message:  {type: String},
    type:     {type: String}, /* message type */
    FId:      {type: String}, /* from user id */
    TId:      {type: String}, /* to user id */
}, {timestamps: true});       /* createdAt, updatedAt */

module.exports = mongoose.model("message", messageSchema);