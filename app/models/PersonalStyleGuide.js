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
  faceType: { name: { type: String, enum: config.faceShapes }, image: String },
  bodyType: { name: { type: String, enum: config.bodyShapes }, image:String },
  facialLook: { name: { type: String, enum: config.FacialHair }, image: String},
  skinType: { name: String, image: String },
  clothingStyle: { name: String, image: String },
  fit: { name: { type: String, enum: config.shirtType }, image : String },
  outfit: { name: String, image: String },
  existingWadrobeMix: { name: String, image: String },
  patterns: {name: { type: String, enum: config.pattern }, image: String},
  colorType: String,
  colors: [{ name: String, color: String }], 
  avoidColors: [{ name: String, color: String }], 
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
          callback(retObj);
      } else {
          retObj.status = true;
          retObj.message = "Successfully Added";
          retObj.data = result;
          callback(retObj);
      }
  });
}