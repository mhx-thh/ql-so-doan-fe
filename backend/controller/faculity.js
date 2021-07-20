const Faculity = require('../models/faculity');

exports.addFaculity = async (req, res, next) => {
  //console.log(req.body.faculityName);
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
