const deliveryOrder = require('../models/DeliveryOder');


String.prototype.toObjectId = function () {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

exports.getDeliveryOder = async (req, res, next) => {
  resData = await deliveryOrder.find({ DCID: req.params.dcid.toObjectId() }).exec();
  if (JSON.stringify(resData) == '[]') {
    resData = await deliveryOrder.find({ CID: req.params.dcid.toObjectId() }).exec()
  }
  if (resData) {
    res.status(200).json(resData);
  }
  else
    res.status(500).json({
      message: "Fetching posts failed!"
    })
}

