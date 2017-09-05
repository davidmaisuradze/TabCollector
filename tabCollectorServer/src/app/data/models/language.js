var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var languageSchema = new Schema({
    name: { type: String, require: true, unique: false },
    code: { type: String, require: true, unique: false },
    tablinkLocaleIds: [{ type: Schema.Types.ObjectId, ref: 'tablinkLocales' }],
    dateCreated: { type: Date, require: true, unique: false },
    dateDeleted: { type: Date, require: false, unique: false },
});

var Language = mongoose.model('Language', languageSchema);

module.exports = Language;