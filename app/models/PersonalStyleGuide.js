var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var config = require('../../config/mpf_config');
var Schema = mongoose.Schema;

var personalStyleGuideSchema = new Schema({
  userId: { type: ObjectId, ref: 'users' },
  images: [String],
  mobile: [String],
  email: [String],
  firstName: String,
  lastName: String,
  brief: String,
  personalInfo: [],
  styleData: [],
  colorData: {
    warmColors: [],
    avoidColors: []
  },
  recShirtType: [{ name: String, image: String }],
  recCollarType: [{ name: String, image: String }],
  suitLapel: { name: String, image: String },
  recShirts: [{ _id: { type: ObjectId, ref: 'products' }, image: String, productId: String, price: Number, name: String}],
  recTrousers: [{ _id: { type: ObjectId, ref: 'products' }, image: String, productId: String, price: Number, name: String}],
  recSuits: [{ _id: { type: ObjectId, ref: 'products' }, image: String, productId: String, price: Number, name: String}],
  recAccessories: [{ _id: { type: ObjectId, ref: 'products' }, name: String, image: String, brand: String, price: Number}]
}, { timestamps: true, versionKey: false, collection: "personalStyleGuides" });

var personalStyleGuide = module.exports = mongoose.model('personalStyleGuide', personalStyleGuideSchema, 'personalStyleGuides');

module.exports.getAllPsgs = (callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
};
personalStyleGuide.find({},function (errPsg, psg) {
    if(errPsg) {
        callback(retObj)     
    } else {
        retObj.status = true;
        retObj.message = "Success";
        retObj.details = psg;
        callback(retObj);
    }
  });
}

module.exports.getPsgById = (id, callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
};
personalStyleGuide.findById(id, {},function (errPsg, psg) {
    if(errPsg) {
        callback(retObj)     
    } else {
        retObj.status = true;
        retObj.message = "Success";
        retObj.details = psg;
        callback(retObj);
    }
  });
}

module.exports.getPsgByUserid = (userid, callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
};
personalStyleGuide.find({userId: userid}, function (errPsg, psg) {
    if(errPsg) {
        callback(retObj)     
    } else {
        retObj.status = true;
        retObj.message = "Success";
        retObj.details = psg;
        callback(retObj);
    }
  });
}

module.exports.getPsgByMobile = (mobile, callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
};
personalStyleGuide.find({mobile: mobile}, function (errPsg, psg) {
    if(errPsg) {
        callback(retObj)     
    } else {
        retObj.status = true;
        retObj.message = "Success";
        retObj.details = psg;
        callback(retObj);
    }
  });
}

module.exports.addPsg = (body, callback) => {
  var retObj = {};
  var query = { _id: mongoose.Types.ObjectId() };
  if (body._id) {
      query = { _id: body._id };
  }
  
  personalStyleGuide.update(query, body, {upsert: true}, function (errPsg, result) {
      if (errPsg) {
          retObj.status = false;
          retObj.message = "Error saving Psg";
          console.log(errPsg)
          callback(retObj);
      } else {
          retObj.status = true;
          retObj.message = "Successfully Added";
          retObj.data = result;
          callback(retObj);
      }
  });
}