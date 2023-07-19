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

// Function to scrape the album data
const scrapeAlbumData = async () => {
  const url = 'https://www.discogs.com/search/?limit=250&sort=hot%2Cdesc&ev=em_rs&country_exact=US&decade=2020';
  const html = await fetchHTML(url);

  if (!html) {
    console.error('Failed to fetch HTML');
    return [];
  }

  const $ = cheerio.load(html);
  const albums = [];

  $('#search_results .card').each((index, element) => {
    const albumName = $(element).find('.card-release-title a.search_result_title').text().trim();
    const albumCover = $(element).find('img[data-src]').attr('data-src');

    albums.push({
      albumName,
      albumCover,
      albumYear: 2020, // Set the album year as '1970'
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  console.log('Scraped albums:', albums);

  return albums;

};

// Generate seeder file content
const generateSeederFileContent = (albums) => {
  const seederData = {
    up: {
      albums,
    },
    down: {
      albums: [],
    },
  };

  const content = `module.exports = ${JSON.stringify(seederData, null, 2)};`;

  return content;
};

// Usage example
scrapeAlbumData()
  .then((albums) => {
    const seederFileContent = generateSeederFileContent(albums);
    const filePath = '/Users/damiandiaz/Desktop/DC2023/Backend Project/seeders/20230718013629-albums.js';
    fs.appendFileSync(filePath, seederFileContent);
    console.log(`Data appended to the seeder at ${filePath}`);
  })
  .catch((error) => {
    console.error('Error scraping album data:', error);
  });
