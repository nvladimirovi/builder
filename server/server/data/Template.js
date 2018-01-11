const mongoose = require("mongoose");
const REQUIRED_VALIDATION_MESSAGE = "{PATH} is required";

let templateSchema = new mongoose.Schema({
    body: { type: Object, required: REQUIRED_VALIDATION_MESSAGE }
});

let Template = mongoose.model("Template", templateSchema);

module.exports = Template;
