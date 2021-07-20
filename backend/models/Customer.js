const mongoose  = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const customerSchema = mongoose.Schema({
  CEmail: {type: String, required: true, unique: true},
  CPassword: {type: String, required: true},
  CName: {type: String, required: true},
  SPID: {type: String, required: false},
  CPhoneNumber: {type: String, required: false},
  CGender: {type: String, required: true},
  CAddress: {type: String, required: false},
  TypeAccount: {type: String, require: false}
});

customerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Customer', customerSchema);
