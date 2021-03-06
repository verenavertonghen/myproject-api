var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = require('./category.js');
var types = 'quote advice question reminder app'.split(' ');
var NotificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: types
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});
module.exports = mongoose.model('Notification', NotificationSchema);