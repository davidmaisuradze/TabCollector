//get mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true, unique: false },
    firstname: { type: String, required: true, unique: false },
    lastname: { type: String, required: true, unique: false },
    sex: { type: Number, required: true, unique: false },
    birthDate: { type: Date, required: true, unique: false },
    dateCreated: Date,
    dateDeleted: Date,
    roleIds: [{ type: Schema.Types.ObjectId, ref: 'roles' }],
    tabLinkIds: [{ type: Schema.Types.ObjectId, ref: 'tablinks' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
