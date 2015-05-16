var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var feelings = 'up down'.split(' ');
var CategorySchema = new Schema({
    key: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    feeling: {
        type: String,
        required: true,
        enum: feelings
    }
});
module.exports = mongoose.model('Category', CategorySchema);