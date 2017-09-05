var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tablinkSchema = new Schema({
    name: { type: String, required: true, unique: false },
    gourpId: { type: Number, required: true, unique: false },
    tablinkLocaleIds: [{ type: Schema.Types.ObjectId, ref: 'tablinkLocales' }],
    dateCreated: { type: Date, require: true, unique: false },
    dateDeleted: { type: Date, require: false, unique: false },
});

var TabLink = mongoose.model('TabLink', tablinkSchema);

module.exports = TabLink;