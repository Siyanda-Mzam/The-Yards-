
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var plm = require('passport-local-mongoose');
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}
var userSchema = new Schema({
    // Personal Details
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    nationality: { type: String, trim: true },
    idnumber: { type: Number, trim: true },

    // Education Details
    institution: { type: String, trim: true },
    student_number: { type: String, trim: true },
    study_year: { type: Number, trim: true },
    // Contact Details
    mobile: { type: String, trim: true},
    tel:    { type: String, trim: true},
    email:  { type: String, trim: true},
    place:  { type: String, trim: true},
    ptype:  { type: String, trim: true},
    addedOn: { type: String, required: false }
});
userSchema.pre('save', function (next) {
    if (!this.addedOn)
        this.addedOn = (new Date().addHours(2)).toUTCString();
    next();
});
userSchema.plugin(plm);
var User = mongoose.model('User', userSchema);
module.exports = User;