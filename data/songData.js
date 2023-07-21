const db = require('../models');
const { Album, Song } = db;


const splitAndCreateSongs = async () => {
  try {
    const albums = await Album.findAll({
      attributes: ['id', 'songList'],
      include: [Song],
    exclude: ['ArtistId', 'songID','Album.Id', 'Songs.AlbumId']  // Fetch associated songs for each album
    });

    const songsToCreate = [];
    for (const album of albums) {
      const songList = album.songList.split(',').map((track) => track.trim());
      const albumID = album.id;

      for (const songName of songList) {
        // Build new song instances and add them to the songsToCreate array
        songsToCreate.push({
          songName,
          albumID,
        });
      }
    }

    // Bulk create all songs at once
    await Song.bulkCreate(songsToCreate);

    console.log('Songs have been created for each album.');
  } catch (error) {
    console.error('Error creating songs:', error);
  } finally {
    db.sequelize.close(); // Close the database connection after running the script
  }
};

splitAndCreateSongs();
  

