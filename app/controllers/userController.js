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
    console.log(usr)
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
        clothing: {
          falttering: usr.clothingStyle.falttering,
          trendy: usr.clothingStyle.trendy,
          bold: usr.clothingStyle.bold,
          stylish: usr.clothingStyle.stylish,
          sober: usr.clothingStyle.sober
        } 
      },
      personal: {
        preference: usr.preference,
        descClothing: usr.basicDetailsNote,
        descPerceived: {
          leader: usr.Perceive.leader,
          hardworking: usr.Perceive.hardworking,
          trustworthy: usr.Perceive.trustworthy
        },
        lifestyle: {
          creativeFields: usr.lifeStyle.creativeFields,
          professional: usr.lifeStyle.professional,
        },
        officeDress: {
          formalWear: usr.dressCode.formalWear,
        }
      },
      professional: {
        industary: usr.personalAttrNote,
        occupation: usr.yourOccupation,
        role: ''
      },
      remarks: usr.styleReferenceNote
    }
    response.details = retObj;
    res.json(response);
  })
})

module.exports = router