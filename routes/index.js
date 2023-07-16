var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');
const albumController = require('../controllers/album');
const artistController = require('../controllers/artist');
const genreController = require('../controllers/genre');
const songController = require('../controllers/song');

/* Homepage Router */
 // get homePage ejs template at this route url
 router.get('/', indexController.homepageGet)

 /* Album Router */
 // get album ejs template at this route url
 router.get('/album', albumController.albumGet)

 /* Artist Router */
 // get artist ejs template at this route url
 router.get('/artist', artistController.artistGet)

  /* Genre Router */
 // get artist ejs template at this route url
 router.get('/genre', genreController.genreGet)


  /* Song Router */
 // get song ejs template at this route url
 router.get('/song', songController.songGet)





 
module.exports = router;
