var express = require('express');
var router = express.Router();
const authCheck = require("../middleware/authCheck")
const findProfile = require ("../middleware/findProfile")

/* Pointing to each controller file */
const indexController = require('../controllers/index');
const albumController = require('../controllers/album');
const artistController = require('../controllers/artist');
const genreController = require('../controllers/genre');
const songController = require('../controllers/song');


/* ROUTES: */

/* Homepage Router */
 // get homePage ejs template at this route url
 router.get('/', indexController.homepageGet)

 /* Album Router */
 // get album ejs template at this route url
 router.get('/album', authCheck.authCheck, albumController.albumGet)
// post album from search bar
 router.post('/album/search', authCheck.authCheck, albumController.albumPost)

router.get('/album/favorites', authCheck.authCheck, albumController.albumFavsGet)
 router.post('/album/favorites', albumController.albumFavsPost)

 /* Artist Router */
 // get artist ejs template at this route url
 router.get('/artist', artistController.artistGet)

  /* Genre Router */
 // get artist ejs template at this route url
 router.get('/genre', genreController.genreGet)


  /* Song Router */
 // get song ejs template at this route url
 router.get('/song', authCheck.authCheck, songController.songGet)
 // post song from search bar
 router.post('/song/search', authCheck.authCheck, songController.songPost)



module.exports = router;
