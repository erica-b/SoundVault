var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');
// const authCheck = require("../middleware/authCheck");
// const findUser = require('../middleware/findUser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET create/register hard coded user */
router.get('/create', userController.registerUser);


/* POST create new user */
router.post('/', userController.postCreateUser);


// /* GET EDIT user (load a template to edit a user) */
router.get('/edit/:id', userController.editUserByID);

// /* Edit a user */
router.post('/edit/:id', userController.postEditUserByID);


// /* Delete the user route */
router.get("/delete:id", userController.deleteUserByID);

// /* Login */
router.get('/login', userController.getLogin );


// /* POST Login */
router.post('/login', userController.postLogin );


module.exports = router;
