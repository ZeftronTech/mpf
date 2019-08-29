var mongoose = require('mongoose');
var ObjectId = mongoose.ObjectId;
var config = require('../../config/mpf_config');
var Schema = mongoose.Schema;

var personalizeSchema = new Schema({
  ownerId: { type: ObjectId, ref: 'users' },
  //Basic Details
  image: [String],
  firstName: String,
  lastName: String,
  gender: { type: String, enum: config.gender },
  phone: Number,
  alternateNumber: Number,
  email: String,
  country: String,
  city: String,
  DOB: String, //{ type: Date, default: Date.now },
  WeddingAnniversary: String, //{ type: Date, default: Date.now },
  yourOccupation: String,
  facebookId: String,
  twitterId: String,
  linkedinId: String,
  instagramId: String,
  //physical Attributes
  heightInfeet: {
      foot: Number,
      inches: Number
  },
  heightIncm: Number,
  weight: Number,
  faceShapes: { type: String, enum: config.faceShapes },
  bodyShapes: { type: String, enum: config.bodyShapes },
  bodyProportion: { type: String, enum: config.bodyProportion },
  veinColor: { type: String, enum: config.veinColor },
  skinColor: { type: String, enum: config.skinColor },
  eyeColor: { type: String, enum: config.eyeColor },
  hairColor: { type: String, enum: config.hairColor },
  chinType: { type: String, enum: config.chinType },
  facialLook: { type: String, enum: config.FacialHair },

  shirtSize: { type: String, enum: config.fitSize },
  Trouser: { type: String, enum: config.fitSize },
  Blazer: { type: String, enum: config.fitSize },
  shoeSize: { type: String, enum: config.shoeSize },

  shirtType: { type: String, enum: config.shirtType },
  trouserType: { type: String, enum: config.trouserType },
  ChinosType: { type: String, enum: config.ChinosType },
  BlazerType: { type: String, enum: config.BlazerType },

  //personality attributes
  clothingStyle: {}, //[{ type: String, enum: config.clothingStyle }],
  Perceive: {}, //[{ type: String, enum: config.Perceive }],
  lifeStyle: {}, //[{ type: String, enum: config.lifeStyle }],
  dressCode: {}, //[{ type: String, enum: config.dressCode }],
  spend: {}, //{ type: String, enum: config.spend },
  shoppingFrequency: { type: String, enum: config.shoppingFrequency },
  // Style Preference
  preference: String, //[{ type: String, enum: config.preference }],
  brands: String, //[{ type: String, enum: config.brands }],
  color: {
      shirtColor: String, //{ type: String, enum: config.color },
      trouserColor: String, //{ type: String, enum: config.color },
      chinosColor: String, //{ type: String, enum: config.color },
      blazerColor: String, //{ type: String, enum: config.color },
      suitColor: String //{ type: String, enum: config.color },
  },
  pattern: {
      shirtPattern: String, //[{ type: String, enum: config.pattern }],
      trouserPattern: String, //[{ type: String, enum: config.pattern }],
      chinosPattern: String, //[{ type: String, enum: config.pattern }],
      blazerPattern: String, //[{ type: String, enum: config.pattern }],
      suitPattern: String, //[{ type: String, enum: config.pattern }],
      //look: { type: String, enum: config.look }
  },
  look: {
      office: String,
      weekend: String,
      party: String,
      functions: String
  },
  // Recommendations report
  reportId: [{ type: ObjectId, ref: 'reports' }],
  basicDetailsNote: String,
  physicalAttrNote: String,
  personalAttrNote: String,
  styleReferenceNote: String
}, { timestamps: true, versionKey: false });


var personalizeCollection = module.exports = mongoose.model('personalizes', personalizeSchema, 'personalizes');

module.exports.getById = (id, callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
  };
  personalizeCollection.findById(id, {},function (errPsg, usr) {
      if(errusr) {
          callback(retObj)     
      } else {
          retObj.status = true;
          retObj.message = "Success";
          retObj.details = usr;
          callback(retObj);
      }
  });
}

module.exports.getByOwnerId = (ownerid, callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
  };
  personalizeCollection.findOne({ownerId: ownerid}, {},function (errusr, usr) {
      if(errusr) {
          callback(retObj)     
      } else {
          retObj.status = true;
          retObj.message = "Success";
          retObj.details = usr;
          callback(retObj);
      }
  });
}