const { Profile, Song, Album } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');


const songGet = async (req, res) => {
  const songs = await Song.findAll({attributes: { exclude: ['ArtistId'] },
  include: {
    model: Album,
    attributes: ['albumCover', 'genre']
  }})
    res.render('song', {title: "My Favorite Songs", songs})
  }


/* The songPost renders all songs that contain the search bar results. */
//  More info: The iLike here allows us to search without case sensitive. The percentage signs plus textbox will bring up any song with the word you type in. The percentage signs say 'I dont care whats on the left or right of it' in SQL queries. Ex: You type in bomb and get Bombtrack, Car Bomb, Bombs Away, etc.
  const songPost = async (req, res) => {
    const { textbox } = req.body;
    const songs = await Song.findAll({where: {
      songName: {[Op.iLike]:'%' + textbox + '%'}
    },
    include: {
      model: Album,
      attributes: ['albumCover', 'genre']
    }})
    res.render('song', {title: "All Songs", songs})
  }

  // const songSearch = async (req, res) => {
  //   const songSearchResult = req.
  //   const song = await Song.findAll({where: {
  //     songName: 
  //   }})
  // }

  // const songFavsGet = async (req, res) => {
  //   try {
  //     const userProfileID = req.user.id;
  //     console.log('User Profile ID:', userProfileID);
  
  //     const userProfile = await Profile.findByPk(userProfileID, {
  //       include: [
  //         {
  //           model: Song,
  //           as: 'favoriteSongs',
  //           attributes: ['id', 'albumName', 'albumDate', 'albumCover', 'songList'],
  //           through: { attributes: [] },
  //         },
  //       ],
  //     });
  
  //     if (!userProfile) {
  //       return res.status(404).send('User profile not found.');
  //     }
  
  //     console.log('Favorite Songs:', userProfile.favoriteSongs);
  
  //     res.render('favSongs', {
  //       title: 'Favorite Songs',
  //       favoriteSongs: userProfile.favoriteSongs,
  //     });
  //   } catch (error) {
  //     console.error('Error while retrieving favorite songs:', error);
  //     res.sendStatus(500);
  //   }
  // };

  // const songFavsPost = async (req, res) => {
  //   try {
  //     const { songID, profileID } = req.body;
  
  //     // Find the user's profile by ID
  //     const userProfile = await Profile.findByPk(profileID);
  //     if (!userProfile) {
  //       return res.status(404).send('User profile not found.');
  //     }
  
  //     // Find the album by ID
  //     const song = await Song.findByPk(songID, {
  //       attributes: ['id', 'songName', 'albumCover'], // Include only the required attributes
  //     });
  //     if (!song) {
  //       return res.status(404).send('Song not found.');
  //     }
  
  //     // Check if the association already exists
  //     // Goes through the ProfileAlbum table and looks to see if a user at a given id has already favorited an album with that specific id
  //     const existingAssociation = await ProfileAlbum.findOne({
  //       where: {
  //         profileID: userProfile.id,
  //         songID: song.id,
  //       },
  //     });
  
  //     if (existingAssociation) {
  //       // The association already exists, do not create a duplicate
  //       return res.status(200).json ({
  //         status: 'error',
  //       message: 'Album already in favorites.'});
  //     }
  
      // Create the association between the profile and the album
      // Create a new entry in the table if everything goes well, setting profileID in the ProfileAlbum table to the user that is logged in and the albumID to whatever album they just favorited
      // await ProfileSong.create({
      //   profileID: userProfile.id, // Set the profileId foreign key
      //   albumID: album.id, // Set the albumId foreign key
      //   albumName: album.albumName, // Set the album name
      //   albumCover: album.albumCover, // Set the album cover
      // });
  

  //     // Changing the messages to json so that the errors and successes are able to caught by the ejs template, allowing for certain popups rather the navigating the user to another page before they are done favoriting the songs
  //     return res.status(200).json({
  //       status: 'success',
  //       message: 'Song successfully added to favorites!',
  //     });
  //   } catch (error) {
  //     console.error('Error while adding song to favorites:', error);
  //     return res.status(500).json({
  //       status: 'error',
  //       message: 'An error occurred while adding the song to favorites.',
  //     });
  // };

// }
module.exports = {
  songGet,
  songPost
  // songFavsPost,
  // songFavsGet
}