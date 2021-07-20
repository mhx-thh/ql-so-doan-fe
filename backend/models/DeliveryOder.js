const mongoose  = require('mongoose');

const deliveryOrderSchema = mongoose.Schema({
  DCID: {type: mongoose.ObjectId, required: true, unique: true},
  CID: {type: mongoose.ObjectId, required: true},
  OStatus: {type: String, required: true},
  OCost: {type: String, required: false},
  ODate: {type: String, required: false},
  OHeights: {type: String, required: false},
  OWeights: {type: String, required: false},
  ConsigneeName: {type: String, require: false},
  ConsigneeAddress: {type: String, require: false},
  ConsigneePhone: {type: String, require: false}
});

module.exports = mongoose.model('DeliveryOder', deliveryOrderSchema);
