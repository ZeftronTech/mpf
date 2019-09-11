var express = require('express');
var router = express.Router();
var path = require('path');
var TeaSchool = require('tea-school').TeaSchool;
var generatePdf = require('tea-school').generatePdf;
var config = require('../../config/mpf_config');
var PSG = require('../models/PersonalStyleGuide')
router
.get('/all', function (req,res, next) {
  PSG.getAllPsgs((response)=> {
    res.json(response);
  })
})
.get('/user/mobile/:_mobile', function (req,res, next) {
  var mobile = req.params['_mobile'];
  PSG.getPsgByMobile(mobile, (response)=> {
    res.json(response);
  })
})
.get('/user/:_userid', function (req,res, next) {
  var id = req.params['_userid'];
  PSG.getPsgByUserid(id, (response)=> {
    res.json(response);
  })
})

.get('/:_id', function (req,res, next) {
  var id = req.params['_id'];
  PSG.getPsgById(id, (response)=> {
    res.json(response);
  })
})
.get('/generate/:_id/pdf', function (req, res, next) {
  var psgId = req.params['_id'];
  PSG.getPsgById(psgId, function (response) {
    if(response.status)
      if(response.details) {
        console.log(response.details)
        response.details.name = "PSG";
        var options = {
          htmlTemplatePath: path.resolve(__dirname, '../views/templates/psgFinal.pug'),
      
          // Here you put an object according to https://github.com/sass/node-sass#options 
          styleOptions: {
              file: path.resolve(__dirname, '../', '../', 'public', 'css','psg.css')
          },
      
          // Here you put an object according to https://pugjs.org/api/reference.html#options
          // You can add any additional key to be used as a variable in the template.
          htmlTemplateOptions: {
            name: "PSG",
            data: response.details
          },
      
          // Here you put an object according to https://github.com/GoogleChrome/puppeteer/blob/v1.18.1/docs/api.md#pagepdfoptions
          pdfOptions: {
              // Ignore `path` to get the PDF as buffer only
              path: path.resolve(__dirname, '../../../pdf', 'psg.pdf'),
              format: 'A4',
              printBackground: true,
              
          },
          puppeteerOptions: {
            headless: true,
            args: ['--no-sandbox']
          }
        }
        var teaSchoolOptions = options;
        
        (async() => {
            const pdfFile = await generatePdf(teaSchoolOptions)
            res.send(pdfFile)
            //res.render('templates/psgFinal', response.details)
        })().catch(e => setImmediate(() => {
            console.log("Error Occured While Sending Reports");
            console.log(e)
        }))
      }
      else
      res.json(response)
    else
      res.json(response)
  });
})
;
router
.post('/', function (req, res) {
  var body = req.body;
  PSG.addPsg(body, function (response) {
      res.json(response);
  });
});
module.exports = router;
