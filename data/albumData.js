/* Data Scraping Page */
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Function to fetch the HTML content of the webpage
const fetchHTML = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    return null;
  }
};

// Function to scrape the album data and generate seeder file content
const scrapeAndGenerateSeederFileContent = async () => {
  const albumURLBase = 'https://www.discogs.com/search/?limit=250&sort=have%2Cdesc&ev=em_rs&style_exact=Punk&page=';
  const totalPages = 5; // Change this to the number of pages you want to scrape

  const albums = [];

  for (let page = 1; page <= totalPages; page++) {
    const albumURL = albumURLBase + page;
    const albumHTML = await fetchHTML(albumURL);

    if (!albumHTML) {
      console.error(`Failed to fetch album HTML for page ${page}`);
      continue;
    }

    const $album = cheerio.load(albumHTML);

    // Scrape album names and covers from the album search page
    $album('#search_results .card').each((index, element) => {
      const albumName = $album(element).find('.card-release-title a.search_result_title').text().trim();
      const albumCover = $album(element).find('img[data-src]').attr('data-src');
      const releaseURL = $album(element).find('.card-release-title a.search_result_title').attr('href');

      albums.push({
        albumName,
        albumCover,
        releaseURL,
      });
    });
  }

  console.log('Scraped albums:', albums);

  // Scrape additional data from release pages
  const releaseDataPromises = albums.map(async (album) => {
    const releaseHTML = await fetchHTML(`https://www.discogs.com${album.releaseURL}`);

    if (!releaseHTML) {
      console.error(`Failed to fetch release HTML for ${album.releaseURL}`);
      return null;
    }

    const $release = cheerio.load(releaseHTML);
    const albumDate = $release('td:has(a[hreflang="en"]) time').attr('datetime');
    const genre = $release('th:contains(Genre)').next('td').find('a[hreflang="en"]').text().trim();
    const trackList = [];

    $release('.tracklist_4KOvL tr[data-track-position]').each((index, element) => {
      const trackTitle = $release(element).find('.trackTitleNoArtist_ANE8Q span').text().trim();
      trackList.push(trackTitle);
    });

    return {
      albumDate,
      genre,
      trackList,
    };
  });

  // Wait for all release data promises to resolve
  const releaseData = await Promise.all(releaseDataPromises);

  // Merge album data with release data
  albums.forEach((album, index) => {
    const release = releaseData[index];
    if (release) {
      album.albumDate = release.albumDate;
      album.genre = release.genre;
      album.songList = release.trackList;
    }
  });

  console.log('Scraped album details:', albums);

  const generateSeederFileContent = (albums) => {
    const seederFileContent = `module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Albums', [
          ${albums.map((album) => `{
            albumName: "${album.albumName}",
            albumCover: "${album.albumCover}",
            albumDate: "${album.albumDate}",
            genre: "${album.genre}",
            songList: ${JSON.stringify(album.songList)},
            createdAt: new Date(),
            updatedAt: new Date(),
          }`).join(',\n        ')}
        ], {});
      },
      down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Albums', null, {});
      },
    };`;

    return seederFileContent;
  };

  // Usage example
  const seederFileContent = generateSeederFileContent(albums);
  const filePath = '/Users/damiandiaz/Desktop/DC2023/Backend Project/seeders/20230718013629-albums.js';
  fs.writeFileSync(filePath, seederFileContent);
  console.log(`Seeder file created successfully at ${filePath}`);
};

// Call the scrape function
scrapeAndGenerateSeederFileContent().catch((error) => {
  console.error('Error scraping album data:', error);
});