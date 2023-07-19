const fs = require('fs');

// Read the seeder file
const filePath = '/Users/damiandiaz/Desktop/DC2023/Backend Project/seeders/20230718013629-albums.js';
const seederFileContent = fs.readFileSync(filePath, 'utf8');

// Extract the albums array from the seeder file content
const startIndex = seederFileContent.indexOf('[');
const endIndex = seederFileContent.lastIndexOf(']');
const albumsArrayContent = seederFileContent.substring(startIndex, endIndex + 1);

// Parse the albums array
let albumsArray;
try {
  albumsArray = eval(albumsArrayContent);
} catch (error) {
  console.error('Failed to parse albums array:', error);
  process.exit(1);
}

// Remove duplicate entries based on albumName
const uniqueAlbumsArray = albumsArray.reduce((acc, album) => {
  const isDuplicate = acc.some((existingAlbum) => existingAlbum.albumName === album.albumName);
  if (!isDuplicate) {
    acc.push(album);
  }
  return acc;
}, []);

// Generate the updated seeder file content
const updatedSeederFileContent = `module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      ${uniqueAlbumsArray
        .map(
          (album) => `{
        albumName: "${album.albumName}",
        albumCover: "${album.albumCover}",
        albumDate: "${album.albumDate}",
        genre: "${album.genre}",
        songList: "${album.songList}",
        createdAt: new Date(),
        updatedAt: new Date(),
      }`
        )
        .join(',\n      ')}
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Albums', null, {});
  },
};`;

// Write the updated seeder file content back to the file
fs.writeFileSync(filePath, updatedSeederFileContent);
console.log(`Seeder file updated successfully at ${filePath}`);
