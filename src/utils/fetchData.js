export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "54376d2a3amsh2811ae172f3c4d1p1100f2jsne2fc79adec96",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
// lAKSHYA SAZU WALA  API KEY KHTAM CURRENTLY USING YL729 ONLY IN EXERCISEDB
export const YoutubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fc54882103msh84caaa2e5b313edp14d937jsndaefbb2120d3",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// https://rapidapi.com/spoonacular/api/recipe-food-nutrition/
// INCLUDE THIS API FOR YOUR PROJECT!
