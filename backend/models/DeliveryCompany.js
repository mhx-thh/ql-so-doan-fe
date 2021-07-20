const mongoose  = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const deliveryCompanySchema = mongoose.Schema({
  DCEmail: {type: String, required: true, unique: true},
  DCPassword: {type: String, required: true},
  DCName: {type: String, required: true},
  SPID: {type: String, required: false},
  DCPhoneNumber: {type: String, required: false},
  DCLicennses: {type: String, required: false},
  DCAddress: {type: String, required: false},
  TypeAccount: {type: String, require: false}
});

deliveryCompanySchema.plugin(uniqueValidator);

module.exports = mongoose.model('DeliveryCompany', deliveryCompanySchema);
