const mongoose = require("mongoose")

let emailSchema = new mongoose.Schema({
    body: { type: Object }
});

let Email = mongoose.model("Email", emailSchema);

module.exports = Email;