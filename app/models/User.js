var mongoose = require('mongoose');
var ObjectId = mongoose.ObjectId;
var config = require('../../config/mpf_config');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  vendorName: String,
  vendorContactPerson: String,
  email: String,
  code: String,
  phone: String,
  landMark: String,
  password: String,
  passwordStylist: String,
  stylistId: Number,
  images: [String],
  customerId: String,
  addedByAdmin: {type: Boolean, default: true},
  role: { type: String, enum: config.Roles, default: 'user' },
  // isEmailVerified is used for email verification
  isEmailVerified: { type: Boolean, default: false },
  // isForgotpasswordVerified is used for forgot password
  isForgotpasswordVerified: { type: Boolean, default: false },
  // isMobileVerified is used for mobile number verification
  isMobileVerified: { type: Boolean, default: false },
  // isForgotpasswordVerified_ThroughMobile
  isForgotpasswordVerified_ThroughMobile: { type: Boolean, default: false },
  otp: Number,
  ID: String,
  // createStylelist
  alternateNumber: Number,
  homeAddress: String,
  officeAddress: String,
  city: String,
  state: String,
  pincode: Number,
  homeGoogleAreaCode : String,
  resedentialGoogleAreaCode: String,
  customerPersona : String,
  customerType : String,
  remarks : String,
  // landmark: String,
  specialization: String, //{ type: ObjectId, ref: 'specializations' },
  // specializationId: { type: ObjectId, ref: 'specializations' },
  workingdays: { type: [String], enum: config.days },
  slotTime: Number,
  workingHours: [{
      startTime: Number,
      endTime: Number
  }],
  myCart: [{ productId: { type: ObjectId, ref: 'products' }, size: String, styles: {}, measurements: {} }],
  wishList: [{ type: ObjectId, ref: 'products' }],
  wishListObj: [{
    productId: { type: ObjectId, ref: 'products' },
  type: { type: Number}	//0=custom, 1=readymade
}],
  userStatus: Boolean,
  assignedTo: { type: ObjectId, ref: 'users' },
  typeOfCustomer: String,
  decisionMaker: String,
  creditRating: String,
  customerReference: String,
  productReference: String,
  freqOfShopping: String,
  fabricPreference: String,
  fitPreference: String,
  stylePreference: String,
  discountPreference: String,
  possOfRepeteOrders: String,
  possOfClintReference: String,
  possOfRetOrExchange: String,
  communictnPreference: String,
  overallRating: String
}, { timestamps: true, versionKey: false });

var userCollection = module.exports = mongoose.model('user', userSchema, 'users');

module.exports.getById = (id, callback) => {
  var retObj = {
    status: false,
    message: "Err Querying database, Try again"
};
userCollection.findById(id, {},function (errPsg, usr) {
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