module.exports.admin = {
  '/home' : require('../app/controllers/home'),
  '/psg' : require('../app/controllers/psgController'),
  '/user' : require('../app/controllers/userController')
};
module.exports.user = {
  '/home' : require('../app/controllers/home')
};