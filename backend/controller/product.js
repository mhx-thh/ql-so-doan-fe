const DeliveryCompany = require('../models/DeliveryCompany');


exports.getDeliveryCompany = (req, res, next) => {

  DeliveryCompany.find()
    .then((documents) => {
      res.status(200).json(
        documents
      );
    })
    .catch(error => {
      res.status(500).json({
        message: "Getting list delivery companies failed!"
      })
    })
}

