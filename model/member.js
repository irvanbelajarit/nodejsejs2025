const monggose = require('mongoose');

memberSchema = new monggose.Schema({
    name: String,
    email: String,
    password: String,
    
});

module.exports = monggose.model('Member', memberSchema);