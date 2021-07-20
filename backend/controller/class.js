const classes = require('../models/class');
const faculites = require('../models/faculity');

exports.getClassByNameOfFaculity = async (req, res, next) => {
  console.log(req.query.faculityName);
  let faculity = await faculites.find({id: req.query.faculityName});
  console.log(faculity);
  classes.find({ faculity: faculity.id })
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch(error => {
      res.status(500).json({
        message: "Getting class by name of faculity failed!"
      })
    })
}
