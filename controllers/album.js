const { ProfileAlbum, Album, Profile } = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const albumGet = async (req, res) => {
  const albums = await Album.findAll()
  const userProfileID = req.user.id;
    res.render('album', {title: "Albums", albums, userProfileID})
  }

  const albumSearchPost = async (req, res) => { 
    const { textbox } = req.body;
    userProfileID = req.user.id
    const albums = await Album.findAll({where: {
      albumName: {[Op.iLike]:'%' + textbox + '%'}
    }})
    res.render('album', {title: "My Favorite Songs", albums, userProfileID})
  }
  
  const albumPost = async (req, res) => {
      const userProfileID = req.user.id;
      console.log('User Profile ID:', userProfileID);
      // res.render('album', {title: "Albums", albums, userProfileID})
      try {
        const { albumID, profileID } = req.body;
    
        // Find the user's profile by ID
        const userProfile = await Profile.findByPk(profileID);
        if (!userProfile) {
          return res.status(404).send('User profile not found.');
        }
    
        // Find the album by ID
        const album = await Album.findByPk(albumID, {
          attributes: ['id', 'albumName', 'albumCover'], // Include only the required attributes
        });
        if (!album) {
          return res.status(404).send('Album not found.');
        }
    
        // Check if the association already exists
        // Goes through the ProfileAlbum table and looks to see if a user at a given id has already favorited an album with that specific id
        const existingAssociation = await ProfileAlbum.findOne({
          where: {
            profileID: userProfile.id,
            albumID: album.id,
          },
        });
    
        if (existingAssociation) {
          // The association already exists, do not create a duplicate
          return res.status(200).json ({
            status: 'error',
          message: 'Album already in favorites.'});
        }
    
        // Create the association between the profile and the album
        // Create a new entry in the table if everything goes well, setting profileID in the ProfileAlbum table to the user that is logged in and the albumID to whatever album they just favorited
        await ProfileAlbum.create({
          profileID: userProfile.id, // Set the profileId foreign key
          albumID: album.id, // Set the albumId foreign key
          albumName: album.albumName, // Set the album name
          albumCover: album.albumCover, // Set the album cover
        });
    
  
        // Changing the messages to json so that the errors and successes are able to caught by the ejs template, allowing for certain popups rather the navigating the user to another page before they are done favoriting the albums
        return res.status(200).json({
          status: 'success',
          message: 'Album successfully added to favorites!',
        });
      } catch (error) {
        console.error('Error while adding album to favorites:', error);
        return res.status(500).json({
          status: 'error',
          message: 'An error occurred while adding the album to favorites.',
        });

  }
}



  const albumFavsGet = async (req, res) => {
    try {
      userProfileID =req.user.id
      console.log('User Profile ID:', userProfileID);
  
      const userProfile = await Profile.findByPk(userProfileID, {
        include: [
          {
            model: Album,
            as: 'favoriteAlbums',
            attributes: ['id', 'albumName', 'albumDate', 'albumCover', 'songList'],
            through: { attributes: [] },
          },
        ],
      });
  
      if (!userProfile) {
        return res.status(404).send('User profile not found.');
      }
  
      console.log('Favorite Albums:', userProfile.favoriteAlbums);
  
      res.render('favAlbums', {
        title: 'Favorite Albums',
        favoriteAlbums: userProfile.favoriteAlbums,
        profileID: userProfileID
      });
    } catch (error) {
      console.error('Error while retrieving favorite albums:', error);
      res.sendStatus(500);
    }
  };

 

module.exports = {
  albumGet,
  albumPost,
  albumFavsGet, 
  albumSearchPost,
  albumFavsGet

}