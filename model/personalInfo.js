const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
    income: String,
    credit: [String],
    amount: String,
    debt: {
        type: String,
    }
});

const Personal = mongoose.model("Personal", PersonalSchema);
module.exports = Personal;