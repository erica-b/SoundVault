'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
    "Albums", [
      {
        albumName: "Led Zeppelin",
        albumCover: "https://i.discogs.com/tUq1eBlaXAXoYe3EVsVXISfO-iHsXTp4VKOB4aDIF1o/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDMy/MjI1LTE2ODcyMDY0/NDMtODQ3My5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        albumName: "The Beach Boys Today!",
        albumCover: "https://i.discogs.com/ONzzF7vCb4Gzo8pCLbNk8bRioKYDS1atOmCbBUoHjpE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTIx/NDI0LTE2ODc5OTEw/MzctNDg3MS5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.016Z",
        updatedAt: "2023-07-18T19:08:45.016Z"
      },
      {
        albumName: "The Supremes Sing Rodgers & Hart",
        albumCover: "https://i.discogs.com/_zbmZF4rDgSuJOxvGsESUsL3Diq5ZFRVnxYFQkzzXM0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDQz/NTY1LTE2ODcyOTky/MDAtMzAxMy5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.016Z",
        updatedAt: "2023-07-18T19:08:45.016Z"
      },
      {
        albumName: "Beggars Banquet",
        albumCover: "https://i.discogs.com/fwb57eooF4CtqYg0hTW5Fi8gj1KDTHGezCw0EbSB6cs/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Njkz/MzMzLTE2ODk1MjM0/MDYtMjYwNS5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "Power Of Love",
        albumCover: "https://i.discogs.com/fT4SIf-66qR5s4C8MvfJTCPr5iun5Sx63-3fX226EeA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTky/OTE3LTE2ODg2MTMz/MTYtOTMyMy5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "You Lose, I Win",
        albumCover: "https://i.discogs.com/INqSv16AqMGHH61Oc_dtVBzgG7O4wXoiOeKq60b9lO8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTYx/ODIyLTE2ODgzMzYx/OTYtMTk5NC5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "Country Songs",
        albumCover: "https://i.discogs.com/sjNjF0CbCaHKL7wmMZt6A3uX05tJyCj9d51okpWQK0M/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTgx/NzMzLTE2ODg2MjQ5/MTAtOTg0OC5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "From Walt Disney's Fantasia: Night On Bald Mountain / The Pastoral Symphony",
        albumCover: "https://i.discogs.com/jT8jqxA20EoilEAd43x7xiD6_MXoL1oLqjXZ8Jh-5LY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDMz/MDk1LTE2ODcyMTE2/OTQtNjc4Ni5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "Aretha Arrives",
        albumCover: "https://i.discogs.com/2kHAqZIMVaAIgoIECMBd8bJwi5E0fVjucSPpdZMFazk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTQ5/Nzk1LTE2ODgyMzgy/MzctNDQyMC5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "À Go-Go",
        albumCover: "https://i.discogs.com/3ZxDUp5YqJ7QmS1PUPROp6tRhJ_-fuUm0M6ZPusQ2PI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDY0/OTEzLTE2ODc0ODcz/MzktMzg3My5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "For Your Love",
        albumCover: "https://i.discogs.com/uS0qfyruxdKzVUWGICnK_K28Xk0SqLtxecRvZTzX9BA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTc4/MTM2LTE2ODg0ODMz/MTAtMzg2My5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.017Z",
        updatedAt: "2023-07-18T19:08:45.017Z"
      },
      {
        albumName: "Greatest Hits  Volume 3",
        albumCover: "https://i.discogs.com/G9vN2cyLr_mpjlBJUy3zaTsAEqc5PgTFRCyFH9vi0EI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTIy/ODE2LTE2ODgwMDE5/MzMtNzEwNy5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "The Tom Jones Fever Zone",
        albumCover: "https://i.discogs.com/9sGpSnYzceC-fJWJDxz1KSZzentwt6jcLkTrc8n0EmI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTgy/MTE3LTE2ODg1MDk5/ODUtODQ4Ny5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Workin' On A Groovy Thing",
        albumCover: "https://i.discogs.com/NFD_zQZaX4cr8NJxp7GXsr8j60E0-XpBFUxJIv5CWh0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDUz/MTMyLTE2ODczODQy/MTMtMTQ1OC5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "The Shadow Of Your Smile",
        albumCover: "https://i.discogs.com/bsa13hItYHkr7Llzx4dwga2o91t_mhddYUy7QBk_5Dc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcy/ODg2LTE2ODg0MzA0/MTktOTcxOC5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Do You Love Me / Move Mr. Man",
        albumCover: "https://i.discogs.com/LAqG0Qt3guizOn-Yc-dAmlJiSsWDnh-FbcyCRkbArjA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDkz/NTM2LTE2ODc3MzYw/MjYtNDYyMi5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Twistin' The Stomp",
        albumCover: "https://i.discogs.com/y1DZqAPCwEN7GniRMTklmwcbQ3pi_wBIrShax_6n100/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTIy/OTAwLTE2ODgwMDQw/MzQtMjQwMS5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Aaron Rosand Plays the Music of Pablo de Sarasate",
        albumCover: "https://i.discogs.com/adA0y6HeS-K-ZE2lsvSlGfURt7w4dcJ4QVbsbThq7wI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTUw/MDUwLTE2ODgyMzg0/NjYtMzM1Ni5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "The Carl Smith Touch",
        albumCover: "https://i.discogs.com/IxVnwx5Ez7zzHObeJ7-ddClWy4BwoH45TMiJYS_6yrg/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjM4/ODIzLTE2ODkwMjUy/MTItODQ5Ni5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Star Spangled Banner And Other Great American Marches",
        albumCover: "https://i.discogs.com/jWqnnVhodwJakRZOIS8hplqKCi0GJPE-uWHkSnKt1QE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTgy/NTQ5LTE2ODg1MTQ1/NDEtMTg3Ny5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Dear Mr. Santa Claus",
        albumCover: "https://i.discogs.com/h6kqMuF0Xesv35zpEnb32SQ6zoHwxfUvtxmIJEHct98/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDUw/NDgwLTE2ODc5OTAy/MjItNjM5Mi5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Tears In My Eyes/I See The Light",
        albumCover: "https://i.discogs.com/DK3q-LpWnZ4EFRQ0Pqkb8YcLm7CIOwVtDcK0rfG8MGI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTA0/MDM2LTE2ODc4NDMz/ODYtMzk0OS5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "The Circle Game",
        albumCover: "https://i.discogs.com/YOogtEKIV1PwSqOOofOciyGbrupcCq5xvaJBOWWQBrc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTQx/NzQ5LTE2ODgxNjM1/MDAtMTc3OS5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "I Want To Love You (Scared) / Hey Joe",
        albumCover: "https://i.discogs.com/4NsVI498FGYvkPkr5_OBShqOLkKrFxLupN84f_5bx9I/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTYy/MDg5LTE2ODgzMzg2/ODgtMjQ3Mi5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
      {
        albumName: "Ain't She Sweet / Nobody's Child",
        albumCover: "https://i.discogs.com/A81cmlsHsc3_edMcnIlQpXBSqK9z93sSyVV4GK6jT4Q/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTMx/MzAwLTE2ODgwNzAw/MzctODcxNy5qcGVn.jpeg",
        albumYear: 1960,
        createdAt: "2023-07-18T19:08:45.018Z",
        updatedAt: "2023-07-18T19:08:45.018Z"
      },
    
 
  
      {
        albumName: "Endless Flight",
        albumCover: "https://i.discogs.com/2TxYoDpo229jh_ij3X24BGe1_WcYOcORylr08VRm5NA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTEz/MDk5LTE2ODc5MTgy/MzctMjAzOC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.953Z",
        updatedAt: "2023-07-18T19:13:27.953Z"
      },
      {
        albumName: "Born To Run",
        albumCover: "https://i.discogs.com/dezl2vSbzsoBR9qRF03eXyH5dz5M-fCXiVORi6nmgF8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjQ1/NjU0LTE2ODkwOTQx/MjktNjIyNC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.953Z",
        updatedAt: "2023-07-18T19:13:27.953Z"
      },
      {
        albumName: "Greatest Hits",
        albumCover: "https://i.discogs.com/UV_cWmBDUN0dYF267b0er_uoPixJ5u2ka4HKw8CbfYE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTkz/MzEwLTE2ODg2MjAx/NjMtNjI4OS5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.953Z",
        updatedAt: "2023-07-18T19:13:27.953Z"
      },
      {
        albumName: "Free To Be...You And Me",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.953Z",
        updatedAt: "2023-07-18T19:13:27.953Z"
      },
      {
        albumName: "The Slider",
        albumCover: "https://i.discogs.com/HeNioXD60XNr9fV5E7kWTbI8ONdCffXAaHzOjRrnKJQ/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDMz/MjMzLTE2ODcyMTQ3/MDItMjM5My5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "Greatest Hits",
        albumCover: "https://i.discogs.com/JEeiK9iju8x_y9MlrpIihbQz-RT3BCdHqAE-dzYlXgk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDc3/ODc5LTE2ODc2ODA3/MjAtNDEwNi5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "The Gist Of The Gemini",
        albumCover: "https://i.discogs.com/BqnuLEnCjV6_4Rcrml2W88pcEs5Z4BSaqcj4XBlZjqk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDgw/Mzc4LTE2ODc2MTcz/NTItOTI4Ny5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "Boston",
        albumCover: "https://i.discogs.com/dvkuioOunznuK3w9tI2qtMIZu4TzcbUnSsdmfrtObFw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjU5/OTQ5LTE2ODk0NDM1/MTgtNDYwNi5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "A La Carte",
        albumCover: "https://i.discogs.com/iAb5hM57U9LzpmgFVla3SVrqykVK6cfV98OEcQH5BjE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTkw/NjgyLTE2ODg1ODcw/NDUtMjU1Ny5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "The Golden Dream Of Hank Williams",
        albumCover: "https://i.discogs.com/Mx0pdRwmYYGn0gx0apLzxrmjZReDPBElWjiY7R30FkI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDYx/MDQ5LTE2ODc0NTUx/NzEtMjI5Mi5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "C'mon Everybody",
        albumCover: "https://i.discogs.com/G_SrvsMfM8YNLQPLINgF_Pagt4LSYuEV1-ONpkWUJ4E/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDUw/NjE4LTE2ODczNzE2/NjYtMTY5OC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "His Hand In Mine",
        albumCover: "https://i.discogs.com/qL-m1gwBKC7VVDlmmX6ILLIy6Zj3csnCIuFGpCATnR0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDY5/MDQxLTE2ODc1MjM4/MDUtOTcyNS5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "Mothership Connection",
        albumCover: "https://i.discogs.com/gyfFJfr3iaXG8HibMeoc3LCaL7YDcwyDqYkynDVa4ig/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDMy/NDIzLTE2ODcyMDkz/MzItNjYyMS5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "Bringing It All Back Home",
        albumCover: "https://i.discogs.com/O2-nnL5KipvCqafES7w-WN8i8pKGKAScCCdYIvL1nz4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDc0/MTkyLTE2ODc1NTM0/NzMtNDQ4NS5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "Heroes Are Hard To Find",
        albumCover: "https://i.discogs.com/zNLRbPmloJkmlyC8K-T_qSIl7BuLF5k-oBMrVZoL9Sg/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDU4/MzcwLTE2ODc0Mzg0/MjQtOTU5Ni5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "Tuff Darts!",
        albumCover: "https://i.discogs.com/7uwOQE4N6exeJW3J62JAUYA-uPu_bbbnp5Bd79I1Va4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjAw/OTk5LTE2ODg2NzU3/OTMtNTEzMS5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.954Z",
        updatedAt: "2023-07-18T19:13:27.954Z"
      },
      {
        albumName: "This Little Light Of Mine",
        albumCover: "https://i.discogs.com/HXtq--A1hyR6jGEaALeSBh6HIG2sOPj07OgWWA1YS_8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDM4/MDkzLTE2ODcyODE1/MDItMTA4OC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Don't Let Up",
        albumCover: "https://i.discogs.com/CAAOplBaeiA138ooej-4RuvaAKI-AHfcFQjNfz3WmV4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTU5/NDA3LTE2ODgzMTky/MTMtMjI5NC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Evergreen",
        albumCover: "https://i.discogs.com/mqx9Ol_TyM8v2rFG5qHBvKBWTQ1-iqVNHXdSoUbisDE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTMw/NDM5LTE2ODgwNjcw/MjYtMjYwOC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Deja Vu",
        albumCover: "https://i.discogs.com/_GFKAMDSYi5TQpKWqhCvmSRxLgj4gWD9k3GRdDPjfag/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDYy/NDExLTE2ODc0NjQ1/ODUtNjkwMC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Red, White & Blue (Grass)",
        albumCover: "https://i.discogs.com/WPQlleCRVmfPHITXxfoL-J2ToR59eEnDgCDnMDGvAKc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDc2/MDE5LTE2ODc2MTg5/NTYtMjkyMi5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "The Wiz - Original Motion Picture Soundtrack",
        albumCover: "https://i.discogs.com/hIsvQp_c6THZz3RSNuX3ptlZZcA_FuoHh6t0cqlVcY8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTEy/NDU0LTE2ODc5MDk0/NjgtNTU3NS5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Sex Machine",
        albumCover: "https://i.discogs.com/XYe2PNjP4OPnQ9IclqrXmQpIYVkKUj3ZNONenBgbRJc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDI4/NzQ4LTE2ODcxODUz/MTQtODA2OC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Fundamental Roll",
        albumCover: "https://i.discogs.com/s7VbxSpsXbC2eZpGfIZlr7TffuPT2-kieWIqRos6xh4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjEx/MjYyLTE2ODg3NzA1/NzQtMTE2Ny5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
      {
        albumName: "Ain't No Stopping Us Now/I Got The Love",
        albumCover: "https://i.discogs.com/734VmYfpIMq6bYGMwJ0Yk9qQLfsLQlR-8GDDK5DNa80/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjIz/NTAyLTE2ODg4ODk4/MTQtMTM2MC5qcGVn.jpeg",
        albumYear: 1970,
        createdAt: "2023-07-18T19:13:27.955Z",
        updatedAt: "2023-07-18T19:13:27.955Z"
      },
    

  
      {
        albumName: "Heart",
        albumCover: "https://i.discogs.com/bbImDvdhsv_TTlLk377cZZhHYyg6aPNCpB2nzSNiX6Q/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDI4/NTIwLTE2ODcxODI0/ODYtNTk1Ni5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.180Z",
        updatedAt: "2023-07-18T19:14:48.180Z"
      },
      {
        albumName: "I Love Rock 'N Roll",
        albumCover: "https://i.discogs.com/dXCTi-QecBN7XheQiWJb96Vb__rGS2FdrZeNnIuubQI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDc1/NDg1LTE2ODc1NjMw/MjAtMTU1MS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.180Z",
        updatedAt: "2023-07-18T19:14:48.180Z"
      },
      {
        albumName: "Demo",
        albumCover: "https://i.discogs.com/l_Bw9O7GjVuy8hlqZ6_8p-a-BYoiXgYAY0ERx_NZ7fo/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTUw/NTYwLTE2ODgyNDE1/MjQtNzM0My5wbmc.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.180Z",
        updatedAt: "2023-07-18T19:14:48.180Z"
      },
      {
        albumName: "Shadows Of The Sixties / Julia",
        albumCover: "https://i.discogs.com/82Kts3m2eMInpbx-ox-4KYvVFfT_1cwbydIbNO0g_vw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcx/MjQyLTE2ODg0MTQ1/MTUtOTY1NS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.180Z",
        updatedAt: "2023-07-18T19:14:48.180Z"
      },
      {
        albumName: "Hysteria",
        albumCover: "https://i.discogs.com/QwFWPCJxc8bgOxBWRsMyfJRf5Xk6jpmlCVittc29rdU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjA5/OTcyLTE2ODg3NjEy/NDctNzYyOS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.180Z",
        updatedAt: "2023-07-18T19:14:48.180Z"
      },
      {
        albumName: "Nebraska",
        albumCover: "https://i.discogs.com/7eS2MKN0rQ19SrRTVr6OnJ-3Q65-xlVqL8bVrZ7Kgrk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg3/OTQ3LTE2ODc2OTI2/MTgtNTAxNS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Julio",
        albumCover: "https://i.discogs.com/87HzgZItPGBGXM27coHB5vD3BWTfa1gAv7k7rvV5Vng/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjIx/OTQyLTE2ODg4NzAw/MDQtNTMwMC5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "The Cars",
        albumCover: "https://i.discogs.com/tOWKAKvC2JRrNcsDhteGhT3gxI2fO_e28C5PMGnd3Qc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTgw/MzU5LTE2ODg0OTc4/MzYtOTYyNi5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "...But The Little Girls Understand",
        albumCover: "https://i.discogs.com/sktNJZvpg69cQ5pa4aBWRSNWNlV090tWV_0_s2YMBlM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTU4/NzM1LTE2ODgzNTEw/MjMtNTIwNi5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "2112",
        albumCover: "https://i.discogs.com/VpLbZcRYKb4iVr0_9rLU3fkSI4kBQMHbZUeeogiOTsE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg0/NzY0LTE2ODc2NTI0/NTQtNDU0MC5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Discipline",
        albumCover: "https://i.discogs.com/_F8lGA7ga6Ba8DnlLJa_S5_XSGcBijRDYEwkGVoHdTM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjA2/MzkwLTE2ODg3MzY1/MDAtNDk1MC5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Demo 2",
        albumCover: "https://i.discogs.com/YwBpNahDuJCy2jC1yh2IO8DGSMd-3cZmRINMwIyRgao/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTM1/OTQxLTE2ODgxMjEw/OTEtMTIwNS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Tell It To My Heart",
        albumCover: "https://i.discogs.com/bJLGIP2Srwaov9J6YKA2-oUvxgbHTsbLMIJt10kpAGw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTAz/MjI2LTE2ODc4Mjc3/MDgtOTUwNC5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "W103 Talent Search",
        albumCover: "https://i.discogs.com/Fr6Nl69Is8a9ZSxaTdRoxoeQFMtmUk9hmdIGgXdlxEY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDc0/ODU4LTE2ODc3MDAw/MTMtNDk4OS5wbmc.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "My Hometown",
        albumCover: "https://i.discogs.com/lt0ZTUWB6EDNhQ1a76oiwxACLM8qh65dR97a139Jks8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTEw/ODk0LTE2ODc4OTQ4/MjEtNjc2My5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Outlandos D'Amour",
        albumCover: "https://i.discogs.com/UuZf862w-j0Dut-fa58E9LFOiNwvT9r5G3DJXbo7mO8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTg5/OTIzLTE2ODg1ODU0/MTgtODY0OC5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Talk Is Cheap",
        albumCover: "https://i.discogs.com/dAAHgHOnlvvNuo0uvHSuVNQufYc4Qgyr3Ymw8vd1UQM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTU4/NTEzLTE2ODgzMTM5/NTEtNjY5Ny5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Appetite For Destruction",
        albumCover: "https://i.discogs.com/G5py9YvolDbp6XaCgUGL0QMIS9rXdRu3E7iBmsTK4sY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTk1/NDI4LTE2ODg2NDE0/MjEtNDg3My5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Just Like Heaven",
        albumCover: "https://i.discogs.com/NyD__Ad-CFVTZKP6aeY32q1boez2f_PzUL46UmZSm9Q/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg4/Njk0LTE2ODc2OTcz/NDEtNzc2Mi5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Back In Black",
        albumCover: "https://i.discogs.com/YIGa9WrPs3nwJ3Vtz51DuN0t8FwjXtuAAialEDeTcNE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg1/OTQwLTE2ODc3MTM3/NTQtODkwNy5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.181Z",
        updatedAt: "2023-07-18T19:14:48.181Z"
      },
      {
        albumName: "Red Rain",
        albumCover: "https://i.discogs.com/7u-4tJ8Hk1gjceBF2z_hnsXN2byB6YLeSxykdu3wIMA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTQx/NTgxLTE2ODgxNjI1/MTUtNzYzOC5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.182Z",
        updatedAt: "2023-07-18T19:14:48.182Z"
      },
      {
        albumName: "Look On Down The Highway",
        albumCover: "https://i.discogs.com/WDMSWt9U37j401OlHpaILCxjEqG1uCeX4MSYupmUcPM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg1/OTI4LTE2ODc2Njcx/NTgtODEyMS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.182Z",
        updatedAt: "2023-07-18T19:14:48.182Z"
      },
      {
        albumName: "I Still Love You In The Same Ol' Way",
        albumCover: "https://i.discogs.com/SKcvlY2KwRlBYlzVTiudaW1vmN8SHpL3-VpKp4Lf_h4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjY1/OTQ2LTE2ODk0NDEx/MTgtNTY1NS5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.182Z",
        updatedAt: "2023-07-18T19:14:48.182Z"
      },
      {
        albumName: "Close To Your Love",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.182Z",
        updatedAt: "2023-07-18T19:14:48.182Z"
      },
      {
        albumName: "Now Dance",
        albumCover: "https://i.discogs.com/5G5ocOY0C2MUD_IUeaLXWBem1I1g-lK1mV_2r_BAdOc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTU2/OTQxLTE2ODgzMDMx/MTktNjc3Ni5qcGVn.jpeg",
        albumYear: 1980,
        createdAt: "2023-07-18T19:14:48.182Z",
        updatedAt: "2023-07-18T19:14:48.182Z"
      },

      {
        albumName: "Demo",
        albumCover: "https://i.discogs.com/pNqNbipozFebtFQGXr6RMC3ViolWLblg9xexYOFHfXo/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTM5/NDg3LTE2ODgxNDUx/OTEtNTM3Ny5wbmc.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.150Z",
        updatedAt: "2023-07-18T19:17:50.151Z"
      },
      {
        albumName: "Gunfighter Ballads And Trail Songs",
        albumCover: "https://i.discogs.com/KB80ea4nz2cRmBZscCQTTrMvuOoQdZdp1W5WY8F9fSw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDY0/MDMxLTE2ODc0Nzcz/NzItNjE4OS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.151Z",
        updatedAt: "2023-07-18T19:17:50.151Z"
      },
      {
        albumName: "Let There Be Rock",
        albumCover: "https://i.discogs.com/UBpZ9xzgvTGTgqCMCEdyrZ0f3S6D5Xu-RcU21CHesJw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTIy/NDcxLTE2ODc5OTgx/NDktMzM3Ni5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.151Z",
        updatedAt: "2023-07-18T19:17:50.151Z"
      },
      {
        albumName: "Buena Vista Social Club",
        albumCover: "https://i.discogs.com/g4Q1Rho1tPmyXjw1q3BFeIf21cZeHdoNSGtwYw6DhXM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTU5/MzQ0LTE2ODgzMjA3/NzMtNzEyMy5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.151Z",
        updatedAt: "2023-07-18T19:17:50.151Z"
      },
      {
        albumName: "Ahora Vengo Yo",
        albumCover: "https://i.discogs.com/mCgpiAQx-zIaZtMiJMVK-9ITdNuKgDjaw6PvfAgoCn4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTMx/MjY3LTE2ODg0OTQy/MTAtNTM0NS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.152Z",
        updatedAt: "2023-07-18T19:17:50.152Z"
      },
      {
        albumName: "Awake",
        albumCover: "https://i.discogs.com/KtGwagMfPfD7nz14f_njL66FFruKXaDQYyUWOo7blvI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTAy/NDA3LTE2ODc4MjEy/NTMtNDk4NC5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.152Z",
        updatedAt: "2023-07-18T19:17:50.152Z"
      },
      {
        albumName: "The Wall",
        albumCover: "https://i.discogs.com/7ZNnt6E7nZO_q0pULhMncYVkt-6N1_7xJxVxIxoYhSk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTE0/MTU1LTE2ODc5Mzg3/NTQtNzY0OS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.152Z",
        updatedAt: "2023-07-18T19:17:50.152Z"
      },
      {
        albumName: "Flick Of The Switch",
        albumCover: "https://i.discogs.com/pKrCr4mi4ZhpEKG-dO9IKnQEDj_X-D3PZ45ZQcZD0RM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcy/OTUyLTE2ODg0MzE0/NzYtNjQzNS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.152Z",
        updatedAt: "2023-07-18T19:17:50.152Z"
      },
      {
        albumName: "Not A Pretty Girl",
        albumCover: "https://i.discogs.com/783GV-zW6ntVweEDURtOEbaSS3mkzKqEUB57y9zAw6w/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTky/NjgzLTE2ODg2MDk3/MzItOTExMS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "Super Hits Of The '70s - Have A Nice Day, Vol. 9",
        albumCover: "https://i.discogs.com/ECeWbVtwECzIXxrQTYLQ5DHpTXeJBLq9q-FZWYuhlrw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDky/MjAxLTE2ODc3Mjc4/MTItNDMyOS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "SPLASH / SF",
        albumCover: "https://i.discogs.com/P06Fyslm9_FERPsDbNgbiwzc9OAaZkS1g3Ya1rpYEaY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTMy/MzU2LTE2ODgwNzg4/MDItNjIzNi5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "Brigand Raid",
        albumCover: "https://i.discogs.com/bwfndt-LPgbTjSZTtl0az9fkgFekeOpIE0rDTKat_AY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDk3/NTAyLTE2ODc3ODIz/MzctNTA2OS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "Hell Freezes Over",
        albumCover: "https://i.discogs.com/sX-uihRMKiOvA-8XqT5ldFYCgV-gNsjaXIbUg2fcSWs/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjY2/MDk5LTE2ODkyODE0/NDMtNTM0MC5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "Shakin' The Train",
        albumCover: "https://i.discogs.com/XWu99PdpAz0aIWbTTpr7EcMW2adLnLY8c6oHMm62cCA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcx/MjE4LTE2ODg0MTQy/MzQtNTAzNC5wbmc.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "Probe 20th Anniversary Party",
        albumCover: "https://i.discogs.com/kuOYMzPLVrBKZO1M6sFU_EEk9r8SiMB9ypcxyhWcVUY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDc2/Mjk4LTE2ODc1NzIy/NjYtNTU5Ni5wbmc.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.154Z",
        updatedAt: "2023-07-18T19:17:50.154Z"
      },
      {
        albumName: "Brother",
        albumCover: "https://i.discogs.com/MXw_nfyJcY76hZtah-_LUiqmhB0ecW--b9Raeu5aWuw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDIz/Mzg0LTE2ODcxMzM2/NTgtMjQ4Ny5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Invocation Of Evil",
        albumCover: "https://i.discogs.com/2l9LII_ug5gnhM31KYPqRWXjbi3qh7Wuhjr9UWg8gnw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTc4/MDQ5LTE2ODg0ODM2/NDUtMjYwMy5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Hymns Smoky Mountain Style - 15 Hymns Of Faith",
        albumCover: "https://i.discogs.com/AdiOzX8B5MX0pF68VsVNGcjrrpfPi_9tMrVL-tAh4aA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg1/NjEzLTE2ODc3NTg1/NjQtOTk2MS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Cherry 4 Washington DC",
        albumCover: "https://i.discogs.com/_Vbgci0fxnqDCaqgIBDwSLG6lrQiQvH4m5vTf6moX38/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDU0/NDAxLTE2ODczOTk3/NjAtNTM2My5wbmc.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Verve Jazz Masters 33",
        albumCover: "https://i.discogs.com/EGDJO6x4xz7yvoDd9DZvh8f8kJSbE5LrwygBQJOK398/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTc5/NjA2LTE2ODg0OTI3/MzgtODk5OS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Sinatra Sings His Greatest Hits",
        albumCover: "https://i.discogs.com/-ih30VRu1skIAicx-SM3s1wh4XdTfk0h0lVSgwSXX_0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDYw/MDA1LTE2ODc2ODcw/NzUtMjE5MS5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Today",
        albumCover: "https://i.discogs.com/tMJnU2Ho9j18hrCNnzxFoUzHb8fvaV1IV_EknGPpxGk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTg0/MDM3LTE2ODg1NDI4/NjctMjMzNy5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "She Wanted More",
        albumCover: "https://i.discogs.com/rReGer9byOdWG-wK6UO_gcA-pZvA1L_-EGyxZ9kVsjQ/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcx/ODA5LTE2ODg0MTg3/MTEtNjk4OC5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "Still Got The Blues",
        albumCover: "https://i.discogs.com/UXphzOBP6dSxHL56sN0A0DeczrMjo6Ast9iltQPI5wg/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTI5/ODI3LTE2ODgwNjI2/MjktNDE1OC5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
      {
        albumName: "The Complete Nakajo Works In Mono: 1996-1999",
        albumCover: "https://i.discogs.com/-2K7HMhJJZHc7XE4T7ZCdTUBqLaGQs4g-69yqZCZmlY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Njcz/MTM3LTE2ODkzOTQx/NDUtMzk1Ni5qcGVn.jpeg",
        albumYear: 1990,
        createdAt: "2023-07-18T19:17:50.155Z",
        updatedAt: "2023-07-18T19:17:50.155Z"
      },
   
      {
        albumName: "Hollow",
        albumCover: "https://i.discogs.com/qhDvl4ZMmr89fz8LtGFsAU0_I_vF9iFIemdA7PIY_OE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDkz/NTYwLTE2ODc3MzYy/MDEtNjAxMS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.892Z",
        updatedAt: "2023-07-18T19:18:25.892Z"
      },
      {
        albumName: "Symbolic",
        albumCover: "https://i.discogs.com/L_-Abl5YXpnwexMR9QOXLGMsyQfS_xn9yo3_M5udxys/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDI1/NDgxLTE2ODcxNjE1/MDYtODMxOS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.893Z",
        updatedAt: "2023-07-18T19:18:25.893Z"
      },
      {
        albumName: "Thug Sunshine",
        albumCover: "https://i.discogs.com/1OZKE7upezJ4C5OdBkLwZmItplZa0s-PrZkrjeQCssE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg5/NDQxLTE2ODc3MDI0/NTAtNjY0Mi5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.893Z",
        updatedAt: "2023-07-18T19:18:25.893Z"
      },
      {
        albumName: "Mak Produkt",
        albumCover: "https://i.discogs.com/UcTX7AH7Gkkc6Uguv3EVCQzNl3brF9UMu5O691naFgs/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDY0/NDk5LTE2ODc0ODI1/MjgtNzI0NS5wbmc.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.893Z",
        updatedAt: "2023-07-18T19:18:25.893Z"
      },
      {
        albumName: "Greatest Hits",
        albumCover: "https://i.discogs.com/F2OcA6dSscf2j1EYF4dz8ausCnuqQ2VrgCztFmZos9U/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjA5/MTUzLTE2ODg3NTI4/NzEtODEwMi5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.893Z",
        updatedAt: "2023-07-18T19:18:25.893Z"
      },
      {
        albumName: "Here We Come... The Ultimate Anthology",
        albumCover: "https://i.discogs.com/F8KHsXSRhnLaQvW6_reP76hpiNb_PB4oAJPdCnG18zU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTIy/NzgwLTE2ODgwMDM1/NzEtNzUxNy5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Steers & Stripes",
        albumCover: "https://i.discogs.com/gkdugNIYNoElvtLTY3w9gS3Ii-H1pWdr-q4U0suA3ro/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg2/MzQ4LTE2ODgwNjU4/ODMtNzQ1My5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Chrysalis Music Group USA Artist Catalog Sampler",
        albumCover: "https://i.discogs.com/GaHaehBu8xCA9g6BhHyCwHK3KX168v_NfsudcqyuUa8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTM5/ODYyLTE2ODgxNDgz/NzktNDYxNi5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "May 2009 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/G9jAw-VnwthQFxNNDXZYiuVf7M-O6qQVWqe4qUWJ9-Y/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTk3/NTk0LTE2ODg2NTQx/ODQtOTU2Ni5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Chrysalis Music Around The World International Sampler November 2009",
        albumCover: "https://i.discogs.com/dNFJy18csxGfvcghP0mT9UEXACnNvFR2H0xhUncyg_8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcw/ODY0LTE2ODg0MzI3/NDEtMTk3OS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "2 Took T.V.",
        albumCover: "https://i.discogs.com/noDdRPfc3Pp7lAE-0Gii6Oy6qw3mRXk0JzQH5ufC0FA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDcx/NjkwLTE2ODc1Mzk2/NzMtOTA4MC5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Small Thangz 2 A Giant",
        albumCover: "https://i.discogs.com/NTn4oFxXOawR0_qwc8TmLdF3PgimC3hpbVCJc3sdIqQ/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg5/NjQ4LTE2ODc3MDUx/MzItODYyNy5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Dog Days Of Summer August 2009 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/6fopQUcKA_qvcUfWO4ydNonzxUhayjgmZh5L3uE6I7U/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY5/NjEwLTE2ODg0MDc2/MTYtOTY1OS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Winter Music Conference 2007 Chrysalis Music Sampler",
        albumCover: "https://i.discogs.com/RYgzgrwoByihLxnQe3mwfi1XJG89belROsBAtK62DXk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY2/NTk1LTE2ODgzODgz/NzgtMjI3OS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "The Ultimate Jimmie Skinner Songbook",
        albumCover: "https://i.discogs.com/HEIu_qFNgvnGg7y2l_wrmC97Abp3cOBOaO81Uno1dAM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDQz/MzM0LTE2ODczODEx/OTctNjI3MS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "December 2009 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/z8DPbBEv2UYIZbklodAdPDrxpz9T_sTrH9HBNFBr85A/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY4/MzU2LTE2ODgzOTkz/NTctMTYwOC5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "November 2009 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/AmqSWszaGG2NPvvz0S9OA8iRtPFMy3iG_mEdDfeNUrk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTc2/NzM1LTE2ODg0Nzky/MTEtMjQ3Mi5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Dr. Feelgood",
        albumCover: "https://i.discogs.com/Ltg1IF9tHj2qbFWfZhes-Xw9s5WEJ8MqANqcPJrUKPc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg5/ODU4LTE2ODc3MjQ4/NzgtNzEzMC5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Den Of Thieves",
        albumCover: "https://i.discogs.com/Sn0vFi_Busu_dHCResjTmFRuhrCjKn23pFfRh4Mj3D4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjE5/MTk0LTE2ODg4NDQx/MTctOTM2MC5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "You're Living All Over Me",
        albumCover: "https://i.discogs.com/FyKILBOtuntR5jVXkGngdPZ0O0_Ccm4yRCQNTo3JXs8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDgy/MDY3LTE2ODc2Mjc2/MzAtNDI2MS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.894Z",
        updatedAt: "2023-07-18T19:18:25.894Z"
      },
      {
        albumName: "Songs Of Love (Victoria's Secret Exclusive)",
        albumCover: "https://i.discogs.com/I37vmkNVlXV0t9hxj5oJokysLNeeMov85gWpS1iF8JA/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTc1/NzE1LTE2ODg0NjU4/MDktNjAyOC5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.895Z",
        updatedAt: "2023-07-18T19:18:25.895Z"
      },
      {
        albumName: "Shining Star",
        albumCover: "https://i.discogs.com/rZGeCqeTzVT_mwjDU5qC5H4w_LvAw5RT5KJ8TvaZhBk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTYx/Mzg3LTE2ODgzMzYx/MDktODIwNi5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.895Z",
        updatedAt: "2023-07-18T19:18:25.895Z"
      },
      {
        albumName: "Screaming For Vengeance",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.895Z",
        updatedAt: "2023-07-18T19:18:25.895Z"
      },
      {
        albumName: "'60s - Gold",
        albumCover: "https://i.discogs.com/jWYFO6EMf6oLFVgp8MuELGQmBC_pLdYRoAyRe4xgsyY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTQw/OTAzLTE2ODgxNTYx/MTUtMjEzMS5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.895Z",
        updatedAt: "2023-07-18T19:18:25.895Z"
      },
      {
        albumName: "Anthology",
        albumCover: "https://i.discogs.com/SB64Zot194R2HXCi6PWwQZj69dVNqcQT_zDSAssBtNM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTA0/MTgwLTE2ODc4NDI5/ODgtMjU3Mi5qcGVn.jpeg",
        albumYear: 2000,
        createdAt: "2023-07-18T19:18:25.895Z",
        updatedAt: "2023-07-18T19:18:25.895Z"
      },
   
      {
        albumName: "Loaded",
        albumCover: "https://i.discogs.com/yJ_jyJENfGeg4BmMBvESqUeOrErDAinqb6u78d--cw0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDQz/MjA4LTE2ODc1NjI1/NDQtOTgwMC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.040Z",
        updatedAt: "2023-07-18T19:19:23.040Z"
      },
      {
        albumName: "Grace",
        albumCover: "https://i.discogs.com/oUv3U7_e2w_NEMyHqiHmI0Jkrd9xvtrmrajH1Zhn3Oc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDgz/MzI0LTE2ODc2Mzcw/MDQtMjk4MS5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.040Z",
        updatedAt: "2023-07-18T19:19:23.040Z"
      },
      {
        albumName: "The Top",
        albumCover: "https://i.discogs.com/duP0qim-FeXDsCl_KI896AMzdnrC49PJr76OEbiSVmc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDI0/MTI1LTE2ODcxNDU3/MjUtMzYyNC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.040Z",
        updatedAt: "2023-07-18T19:19:23.040Z"
      },
      {
        albumName: "Decoding Transmissions From The Möbius Strip",
        albumCover: "https://i.discogs.com/cDH_oSMLWkLuyDdR-pFtDtvPjmNx20-wG4YffMsTrNQ/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTAw/NzIxLTE2ODc4MDYw/NjQtNTA2OC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "The Blues Kings Best",
        albumCover: "https://i.discogs.com/nwisA_0FnA6pXY7Klb0GeiFPGT_dSUDNojA8ARelQp4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTQx/MzI5LTE2ODgxNjA0/NjAtOTM2Ni5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "Anthem Of The Peaceful Army",
        albumCover: "https://i.discogs.com/MleDjws8q6aeQTNE7lIZxND6zOKRC7UMppy3gzhW2NI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjI4/OTQ0LTE2ODg5MzY5/MjktNjA0MC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "Acid Series Vol 6",
        albumCover: "https://i.discogs.com/MmuHtqN9Yr0o00bdvyIFfQGFgv8F67irjmHRDjk6GDY/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjMy/MjQxLTE2ODg5NzU2/NTEtNTA1MS5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "Bad Omens",
        albumCover: "https://i.discogs.com/mHWPY9mrzYlx-Gi3hx-f8M3tR_ODN5FyPvENaL_hu0w/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTgz/MzE0LTE2ODg1MjUw/NjktOTY5NC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "June 2010 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/ptCYBXSiyJ031G02BuXwPLHl_8Era6remKaiDZpqXT4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTk5/NDc4LTE2ODg2NjU5/NzktNzE0Mi5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "February 2010 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/cR1OviqlwafhzTwzKPrATjv5BKqHKFrrH4yx1wxeSbk/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjI5/NDMzLTE2ODg5Mzk1/NDItNDkwOC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "Sync-Apatible Q1'10 Chrysalis Music Sampler",
        albumCover: "https://i.discogs.com/iY59xJveZvEPzhjn3_uOJXg7Gg8LGzwh7G8-t37IiFM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjAw/MTM4LTE2ODg2NzA4/OTEtNzYxMi5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "Transfixiation",
        albumCover: "https://i.discogs.com/yzHk_YK1ehMX7dDPwImOHxVWqldjlaB9qGNq43Ypdog/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDY5/MDU5LTE2ODc1MjMx/MjAtMjIyMS5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "March 2010 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/wp9SS414eRJX7euMWSqMG3Rgmzjva0twghKahSM-Bo0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY3/NDE0LTE2ODgzOTU4/MzYtMzY0Ni5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.041Z",
        updatedAt: "2023-07-18T19:19:23.041Z"
      },
      {
        albumName: "The Blues Is Alive And Well",
        albumCover: "https://i.discogs.com/NQ58hwC2NGEke8s1nGJqucn1dLZiGzKDQDYL9RlrsRc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjU4/ODQ4LTE2ODkyMTM3/NDEtMTcxNy5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "May 2010 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/1fJf713PQqD_9CmyhxvyvObC-Edo5a3aGpEv5FXBoco/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTk4/NjU5LTE2ODg2NjI1/MjAtNTQwOC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Audition",
        albumCover: "https://i.discogs.com/Ar2oerihfvb9OYkh_y0kckJCMb5WC3w9_UZT6a0-VL0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTE1/Njg1LTE2ODc5NDgy/NzQtNDk0NS5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "December 2010 Chrysalis Music Singles Sampler",
        albumCover: "https://i.discogs.com/EZ1L3c8jvLApfv6KHkdV_9-h2NfBc3DKH3eX8CSTmNo/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTc3/MzU2LTE2ODg0ODUx/NzUtODAzNy5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Point Of Know Return",
        albumCover: "https://i.discogs.com/FupD723_xeNtNwaggfME6qOgUW3VX8m2oZ-OfCsJ0ZI/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDI5/Mjg1LTE2ODcxODgw/NjktODI2OS5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "BBC Radio Sessions",
        albumCover: "https://i.discogs.com/fqLRqPJ8gifBqgcWdOb8vw7EQhUdcmzqztUab3kxqwE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTAw/MzI4LTE2ODc4MDMw/MzAtMzA2Mi5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Ramones",
        albumCover: "https://i.discogs.com/03_ab0lLHohJO74RkUYv47Vmtg81PIr8d0J67_e4hic/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTg2/OTY4LTE2ODg2MDc0/MzYtMTU5NC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Disgrace To The Corpse Of Tim",
        albumCover: "https://i.discogs.com/4naFyax4DH_9mfGp4MeTn8h0ZbxFM-EpdzH18fL_dBU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg1/MDg1LTE2ODc2NTQy/ODktNzI0OS5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Poppy.Computer",
        albumCover: "https://i.discogs.com/G3ES8kOYerEgywbSL54Xf18FLZ6spKQ5vetocW6CULE/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTIz/MDgwLTE2ODgwMDUz/OTYtNjgxMi5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Oh My",
        albumCover: "https://i.discogs.com/my60g9sVfl3pZmlTCBrnUaUmi-Pb9fi-NrzlLSoFQ9s/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTE4/NDA5LTE2ODc5Njcx/NzYtNzM4Ny5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Hola",
        albumCover: "https://i.discogs.com/roRdZJ2DDJmcrVF9sT3RUYfjd3aOY8XqnwcK9uWd3F4/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTA0/OTg3LTE2ODc5MjQ1/OTctMjc1MC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
      {
        albumName: "Rock Or Bust",
        albumCover: "https://i.discogs.com/B7S_7NeD7pfNyqAlvgiq17t5R4cpPfSJKtQQOWLlxX0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTEy/OTU1LTE2ODgwNTYx/OTItNjYwOC5qcGVn.jpeg",
        albumYear: 2010,
        createdAt: "2023-07-18T19:19:23.042Z",
        updatedAt: "2023-07-18T19:19:23.042Z"
      },
   
      {
        albumName: "Fearless (March 7, 1970 Live At The Fillmore East)",
        albumCover: "https://i.discogs.com/V9vKU_UTIKupPF1jxVM_JgBmh5jmiWuMR32DjvrSN5s/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDk5/NDg4LTE2ODc4MTYz/MzUtNDU4OS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.343Z",
        updatedAt: "2023-07-18T19:20:05.343Z"
      },
      {
        albumName: "In Times New Roman...",
        albumCover: "https://i.discogs.com/mxt3rQJJiQDxUop0gQ4W-fpBqvdIghnnZ6Gh90fmgJw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mzc3/MTA2LTE2ODY3MDg3/NDAtNjM1MS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.343Z",
        updatedAt: "2023-07-18T19:20:05.343Z"
      },
      {
        albumName: "Transatlanticism",
        albumCover: "https://i.discogs.com/D7a6eg7AXB98qO2CNS-nv8ziWJcApZHb6wDPJVY0sck/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MzUz/NDc1LTE2ODY0OTU2/NjUtMjQzOC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.343Z",
        updatedAt: "2023-07-18T19:20:05.343Z"
      },
      {
        albumName: "Is This It",
        albumCover: "https://i.discogs.com/b-V5BUvYfLtSe4BLgSYbSV_s0j9QsDB9153s5fG0R84/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjM5/OTA5LTE2ODkwNTk5/NjAtNzQwOC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "Farmhouse",
        albumCover: "https://i.discogs.com/5J4IEF5mC_eT1Q6_K6RAy-RbW-96cQcsCzLr0_ZSrdc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTI4/OTMwLTE2ODgwNTU3/NjctODM0MS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "There's a Riot Goin' On",
        albumCover: "https://i.discogs.com/DcJizcR5rChtQKQLV9XQb1jerWHfvY_DwGBsCf-GiKU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjQ3/MDM3LTE2ODkxMTg5/NTgtMzU5OC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "Born Sinner",
        albumCover: "https://i.discogs.com/ReOrEjJhO9LXCR4Mldzfopjwpu3YgyMStCUoytqwKYc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDEx/Nzk4LTE2ODgxNDI3/ODktMzQ0NC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "In Times New Roman...",
        albumCover: "https://i.discogs.com/KE9pS5EBaK6kaQJbIU3YOsmhCQ6l8VU2bsaVVPBIUv8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mzc3/MTMzLTE2ODczMTU3/MDktOTI5OC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "Speak Now (Taylor's Version)",
        albumCover: "https://i.discogs.com/3hoCoaOpkyABTJCQKiK2RT7JS8pVOrmY8qt4u2TLnhw/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjA3/MTA3LTE2ODkyNzA0/NzctNTY1Mi5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "Gag Order",
        albumCover: "https://i.discogs.com/MySyVo7rSXXwTN0FZ5wsDB7AV1TBpX_F8HIthZLJikM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY5/NzY2LTE2ODkyODQ0/OTktNzgxOC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "Crybaby",
        albumCover: "https://i.discogs.com/beYdA-Fl3I5izQDzk3M3-XRULYbpUJwJaA7bqisCLzs/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDEz/NjcwLTE2ODc5NzY5/MzAtNTM0MS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.344Z",
        updatedAt: "2023-07-18T19:20:05.344Z"
      },
      {
        albumName: "In Times New Roman...",
        albumCover: "https://i.discogs.com/bxaYrL-WiDhBXHqPFt9i7ebIgCrng6SfhptfNLtnUlU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mzc3/MTY5LTE2ODcxNzU1/OTUtMjY3My5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "In Times New Roman...",
        albumCover: "https://i.discogs.com/kOeCcGPixaZ2598PmMB30bELokm3RjMbpjCzC67rU_w/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mzc2/NTMzLTE2ODczMDQx/NzEtMTUxNy5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Honky Chateau",
        albumCover: "https://i.discogs.com/CAznZEkFxwgK1PVJXvJO1-39zklMnWvdNkVy-DHxpEQ/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY5/NTM1LTE2ODg0MTgw/NjYtMTE0MS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Diary 001",
        albumCover: "https://i.discogs.com/TTBkGBAOti8_QVLwmUzHI_RAsHoSZqoPMP9Q7TSBA3g/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY5/MDA3LTE2ODg0MDQw/NjEtNDc4NS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Kamaal/The Abstract",
        albumCover: "https://i.discogs.com/EPfgcQ4Wp_Q_iAmW0ecH8geC-JUgVVmcw95dceyBa44/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjU2/MTUxLTE2ODkyMDEx/MDItNDgwMC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Good Riddance",
        albumCover: "https://i.discogs.com/0Tc4db-UF4Jp3noJX-7unWZVub9Sb_0twTa5AzfbWEM/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDIw/NjIxLTE2ODcxMDc1/MzAtNjI3My5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Trident",
        albumCover: "https://i.discogs.com/ulaxsqWqkoh7_DV_e6YrEqPtgpUtqjS6_CJTivoJ42A/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTk3/OTMzLTE2ODg2NTk2/MDEtNTg1My5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "*NSYNC",
        albumCover: "https://i.discogs.com/QoUmLwxiNqnDLDX_UwMhcGJESWBnteSpCibElhk9iiU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTcw/ODk3LTE2ODg0MTIw/MjctMjY4MC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "The Coming",
        albumCover: "https://i.discogs.com/4PSaz-ImcVTFWW5TrNMkdasIFaemeS94XEsh2jyx9pc/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDQz/OTM3LTE2ODczMDQ3/MzMtMjU4MC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Chris Black Changed My Life",
        albumCover: "https://i.discogs.com/r9SAEMNaPCZX9VFOAMeVkmESLBvLTN8lwW3iyy6tWTU/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDg5/NjE4LTE2ODc3MDY4/NDctODQwNi5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Petrodragonic Apocalypse; Or, Dawn Of Eternal Night: An Annihilation Of Planet Earth And The Beginning Of Merciless Damnation",
        albumCover: "https://i.discogs.com/9-b-52Ns45XkecgYyDTXoZOViBZQOaerF0NVAS-T40I/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjA5/NjYzLTE2ODg3NjEw/NTItNDU3My5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "The Bravery",
        albumCover: "https://i.discogs.com/V0ijc3UN64Z4zSp0dSu9yPNSZjkE45DsrH-nVhrmFRQ/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDgx/ODE1LTE2ODgwODEy/MTItNDk4NC5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "College Park",
        albumCover: "https://i.discogs.com/y774y68zHLRsDPAIaMaR4RUUoCOeV-LphU3QR_1NFz8/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDAx/MTY5LTE2ODcxNzIx/MDYtODcwMS5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
      {
        albumName: "Mista Don't Play Everythangs Workin",
        albumCover: "https://i.discogs.com/9VxtNI8lK2hHwYtoixmdu7YsrtHt4H1t_yeyJ06IR0k/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTQx/Nzk3LTE2ODgxNjQw/MTktMTk5Mi5qcGVn.jpeg",
        albumYear: 2020,
        createdAt: "2023-07-18T19:20:05.345Z",
        updatedAt: "2023-07-18T19:20:05.345Z"
      },
    ],
    {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Albums', null, {});
  },
};
