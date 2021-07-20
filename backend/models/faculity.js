const mongoose  = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const faculitySchema = mongoose.Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, required: true}
});

faculitySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Faculity', faculitySchema);
