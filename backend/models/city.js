const mongoose  = require('mongoose');

const citySchema = mongoose.Schema({
  _id: {type: String, required: true },
  TinhThanh: {type: String, required: true},
  QuanHuyen: {type: String, required: true},
  PhuongXa: {type: String, required: true}
});

module.exports = mongoose.model('Cities', citySchema);
