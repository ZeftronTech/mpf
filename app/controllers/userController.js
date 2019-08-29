var express = require('express');
var router = express.Router();
var Personalize = require('../models/Personalize')
router
.get('/:_id', function (req,res, next) {
  var id = req.params['_id'];
  Personalize.getById(id, (response)=> {
    res.json(response);
  })
})
.get('/style/:_ownerid', function (req,res, next) {
  var ownerId = req.params['_ownerid'];
  var retObj = {}
  Personalize.getByOwnerId(ownerId, (response)=> {
    var usr = response.details;
    if(usr) {
      retObj = {
        basic: {
          firstName : usr.firstName,
          lastName : usr.lastName,
          mob: usr.phone,
          emailId: usr.email,
          city: usr.city,
          country: usr.country,
          pass: '',
        },
        physical: {
          height: usr.heightInfeet.inches,
          weight: usr.weight,
          dob: usr.DOB,
          faceShape: usr.faceShapes,
          bodyType: usr.bodyShapes,
          facialLook: usr.facialLook,
          hairColor: usr.hairColor,
          eyeColor: usr.eyeColor,
          skinType: usr.skinColor,
          veinColor: usr.veinColor
        },
        clothing: {
          existingWadrobe: {},
          clothing: usr.clothingStyle
        },
        personal: {
          preference: usr.preference,
          descClothing: usr.basicDetailsNote,
          descPerceived: usr.Perceive,
          lifestyle: usr.lifeStyle,
          officeDress: usr.dressCode
        },
        professional: {
          industary: usr.personalAttrNote,
          occupation: usr.yourOccupation,
          role: ''
        },
        remarks: usr.styleReferenceNote
      }
    }
    
    response.details = retObj;
    res.json(response);
  })
})

module.exports = router