const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema ({
    title: String,
    body: String,
    subject: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    dateSaved: Date
});
mongoose.model('surveys', surveySchema);