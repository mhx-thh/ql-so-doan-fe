const mongoose  = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const classSchema = mongoose.Schema({
  id: {type: String, required: true, unique: true},
  faculity: {type: String, require: true}
});

classSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Class', classSchema);
