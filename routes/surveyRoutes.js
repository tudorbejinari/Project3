const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = app => {
app.post('/api/surveys', requireLogin, (req, res) => {
const { title, subject, body} =req.body;

const survey = new Survey ({
    title, 
    subject, 
    body,
    _user: req.user.id,
    dataSaved: Date.now()
});
});
};