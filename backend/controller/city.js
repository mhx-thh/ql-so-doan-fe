const city = require('../models/city');


exports.getCities = (req, res, next) => {

  city.find()
    .then((documents) => {
      res.status(200).json({
        message: "Post fetched successfully",
        cities: documents,
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      })
    })
}

